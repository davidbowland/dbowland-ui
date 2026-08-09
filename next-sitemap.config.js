// These routes also carry <meta name="robots" content="noindex, nofollow">.
// They are deliberately NOT disallowed in robots.txt: a crawler has to fetch a page
// to see its noindex, so blocking it would keep the URL indexable from inbound links.
const noIndexRoutes = ['/400', '/403', '/404', '/500', '/form-submit', '/genographic', '/marriage', '/smooth-scroll']

module.exports = {
  siteUrl: 'https://dbowland.com',
  outDir: './out',
  exclude: ['/resume-pdf', ...noIndexRoutes],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // Binary downloads can't carry a robots meta tag, so robots.txt is the only lever.
        disallow: ['/desktoporn.zip', '/podcast_rss.zip'],
      },
    ],
  },
}
