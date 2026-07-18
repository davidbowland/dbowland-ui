// @ts-check
import { execSync } from 'child_process'
import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['tsx', 'ts'],
  env: {
    NEXT_PUBLIC_APP_VERSION: execSync('git rev-parse --short HEAD').toString().trim(),
  },
})

export default nextConfig
