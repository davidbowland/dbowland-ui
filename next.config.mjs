// @ts-check
import withExportImages from 'next-export-optimize-images'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['tsx', 'ts'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
})

export default nextConfig
