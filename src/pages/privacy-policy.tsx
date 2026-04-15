import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import { Card, CardContent } from '@heroui/react'
import Head from 'next/head'
import React from 'react'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Privacy Policy -- dbowland.com</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section>
          <div className="mx-auto max-w-[900px]">
            <Card>
              <CardContent className="p-0">
                <PrivacyPolicy />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default PrivacyPage
