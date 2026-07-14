import Head from 'next/head'
import React from 'react'

import { ogImageUrl, siteUrl } from '@config/urls'

export interface SeoHeadProps {
  description: string
  path: string
  title: string
}

const SeoHead = ({ description, path, title }: SeoHeadProps): JSX.Element => {
  const url = `${siteUrl}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content="website" property="og:type" />
      <meta content="dbowland.com" property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={ogImageUrl} property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImageUrl} name="twitter:image" />
    </Head>
  )
}

export default SeoHead
