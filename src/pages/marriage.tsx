import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import { Card, CardContent } from '@heroui/react'
import Head from 'next/head'
import React from 'react'

const MarriagePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Marriage Statistics | David & Tandi Bowland</title>
      </Head>
      <main>
        <section>
          <div className="mx-auto max-w-[900px]">
            <Card>
              <CardContent className="p-0">
                <MarriageStats />
                <PrivacyLink />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default MarriagePage
