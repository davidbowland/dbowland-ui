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
      {/*
        `siteUrl` is hardcoded to the production origin on purpose, and this tag must NOT become
        environment-aware. The same build is deployed to dbowland.com and to the test domain
        bowland.link, byte for byte -- `DEVELOPMENT=true` swaps in `.env.development`, which carries
        API URLs and nothing that reaches this component. So the staging site served a full, crawlable
        copy of every public page while claiming nothing about where the original lived, and a search
        engine that has to pick between two identical sites picked the wrong one.

        og:url does not settle that: it is an Open Graph hint for link unfurls and is not read as a
        canonicalization signal. This link is. Pointing it at production FROM staging is the entire
        point -- a staging page saying "the real one is over there" is the statement that has to be made.
      */}
      <link href={url} rel="canonical" />
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
