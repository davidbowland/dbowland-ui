import fs from 'fs'
import http from 'http'
import path from 'path'
import puppeteer from 'puppeteer'

const outDir = path.join(__dirname, '..', 'out')
const PORT = 3099

const MIME_TYPES: Record<string, string> = {
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const server = http.createServer((req, res) => {
  const urlPath = (req.url ?? '/').split('?')[0]
  let filePath = path.join(outDir, urlPath)

  // trailingSlash: true means directories are served as index.html
  if (!path.extname(filePath)) {
    filePath = path.join(filePath, 'index.html')
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    const mimeType = MIME_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': mimeType })
    res.end(data)
  })
})

;(async () => {
  await new Promise<void>((resolve) => server.listen(PORT, resolve))
  console.log(`Serving ${outDir} on port ${PORT}`)

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  })

  const page = await browser.newPage()

  // Render at Letter width (8.5" × 96dpi = 816px)
  await page.setViewport({ width: 816, height: 1056 })

  // Force light mode
  await page.emulateMediaType('screen')
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }])

  await page.goto(`http://localhost:${PORT}/resume-pdf/`, { waitUntil: 'networkidle0' })

  // Embed all images as data URLs so the PDF renderer never has to fetch them over the
  // network. Prefer the 750px variant where available to keep the PDF file size reasonable.
  const imageSrcs = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLImageElement>('img')).map((img) => img.src),
  )
  for (const src of imageSrcs) {
    const { pathname } = new URL(src)
    const smallerPathname = pathname.replace(/_\d+\.(jpe?g)$/, '_750.$1')
    const candidates = [path.join(outDir, smallerPathname), path.join(outDir, pathname)]
    const filePath = candidates.find((f) => fs.existsSync(f))
    if (filePath) {
      const dataUrl = `data:image/jpeg;base64,${fs.readFileSync(filePath).toString('base64')}`
      await page.evaluate(
        (originalSrc, newSrc) => {
          document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
            if (img.src === originalSrc) {
              img.src = newSrc
              img.srcset = newSrc
              img.loading = 'eager'
              img.decoding = 'sync'
            }
          })
        },
        src,
        dataUrl,
      )
    }
  }

  // Wait for all images to fully decode
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.querySelectorAll<HTMLImageElement>('img')).map((img) => img.decode().catch(() => undefined)),
    )
  })

  // Ensure background colours render in PDF
  await page.addStyleTag({
    content: '* { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }',
  })

  const pdfDir = path.join(outDir, 'assets', 'pdf')
  fs.mkdirSync(pdfDir, { recursive: true })

  await page.pdf({
    format: 'Letter',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    path: path.join(pdfDir, 'david-bowland-resume.pdf'),
    printBackground: true,
  })

  await browser.close()
  server.close()

  console.log(`Resume PDF generated: ${path.join(pdfDir, 'david-bowland-resume.pdf')}`)
})()
