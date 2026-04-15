import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'
import { Card, CardContent } from '@heroui/react'
import Head from 'next/head'
import React from 'react'

const Genographic = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Genographic Information | dbowland.com</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section className="mx-auto max-w-[900px] text-center">
          <Card>
            <CardContent className="p-0">
              <GenographicInfographic />
              <PrivacyLink />
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  )
}

export default Genographic
