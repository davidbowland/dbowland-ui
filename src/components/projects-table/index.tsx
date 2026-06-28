import { motion } from 'framer-motion'
import { ChevronsUp } from 'lucide-react'
import Image from 'next-export-optimize-images/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import {
  ProjectCard,
  ProjectDescription,
  ProjectNavButton,
  ProjectSectionHeading,
  ProjectSourceLink,
  ProjectSourceList,
  ProjectUrl,
  ProjectsLayout,
  ScrollToTopButton,
} from './elements'
import chooseeDiagram from '@assets/images/choosee-diagram.png'
import emailsDiagram from '@assets/images/emails-diagram.png'

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
  },
}

const ProjectsTable = (): JSX.Element => {
  const chooseeRef = useRef<HTMLDivElement>(null)
  const connectionsRef = useRef<HTMLDivElement>(null)
  const emailsRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const otherRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const sseRef = useRef<HTMLDivElement>(null)

  const [hostname, setHostname] = useState('dbowland.com')

  useEffect(() => {
    setHostname(window.location.hostname)
  }, [])

  return (
    <div>
      {/* Page intro and contents nav — above the bento grid */}
      <div className="pt-12 pb-6" ref={introRef}>
        <p className="text-[16px] text-[var(--ink-soft)] leading-[1.75] max-w-[65ch] m-0">
          Side projects are where I get to choose the problem. The work here spans my own AWS and GCP accounts, custom
          domains, an Alexa skill, and tools that more than once made it into production at work.
        </p>
        <div className="mt-8 h-px bg-[var(--rule)]" />
        <nav aria-label="Projects navigation" className="py-5 flex flex-wrap gap-x-6 gap-y-2">
          <ProjectNavButton onPress={() => sseRef.current && sseRef.current.scrollIntoView()}>
            StreetLogic AI - AI, Lambda, React
          </ProjectNavButton>
          <ProjectNavButton onPress={() => connectionsRef.current && connectionsRef.current.scrollIntoView()}>
            Connections - AI, DynamoDB, Lambda, React
          </ProjectNavButton>
          <ProjectNavButton onPress={() => emailsRef.current && emailsRef.current.scrollIntoView()}>
            Email - SES, Lambda, DynamoDB
          </ProjectNavButton>
          <ProjectNavButton onPress={() => chooseeRef.current && chooseeRef.current.scrollIntoView()}>
            Choosee - DynamoDB, Lambda, React
          </ProjectNavButton>
          <ProjectNavButton onPress={() => rootRef.current && rootRef.current.scrollIntoView()}>
            Root - Infrastructure
          </ProjectNavButton>
          <ProjectNavButton onPress={() => otherRef.current && otherRef.current.scrollIntoView()}>
            Other - Lambda, React, SQS
          </ProjectNavButton>
        </nav>
      </div>

      {/* Bento grid */}
      <ProjectsLayout>
        {/* StreetLogic AI — col-span-5 */}
        <motion.div
          className="col-span-12 md:col-span-5"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={sseRef} title="StreetLogic AI">
            <ProjectUrl>
              URL: <Link href={`https://sse.${hostname}`}>{`https://sse.${hostname}`}</Link>
            </ProjectUrl>
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              Street Epistemology is a conversational technique for examining beliefs — not to win arguments, but to
              explore the reasoning and confidence behind them. StreetLogic AI makes that conversation available on
              demand. Users start with a claim of their own or one surfaced from the day&apos;s news headlines, set a
              confidence level, and the AI leads the dialogue: asking questions, reflecting answers, and probing the
              reasoning rather than the conclusion. Conversations are deleted within 48 hours and never used for
              training.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              Designing a Socratic AI means fighting the model&apos;s instinct to be helpful in the wrong direction — it
              wants to validate, summarize, and conclude. The engineering challenge was keeping the AI in the role of
              questioner rather than answerer.
            </ProjectDescription>
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/sse-api">
                  sse-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/sse-infrastructure">
                  sse-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/sse-ui">
                  sse-ui (React/TypeScript)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>

        {/* Connections — col-span-7 */}
        <motion.div
          className="col-span-12 md:col-span-7"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={connectionsRef} title="Connections">
            <ProjectUrl>
              URL: <Link href={`https://connections.${hostname}`}>{`https://connections.${hostname}`}</Link>
            </ProjectUrl>
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              A word-grouping puzzle game with a twist: every puzzle is AI-generated on demand. The concept is familiar
              — sixteen words, four hidden categories, find the groupings — but there is no puzzle bank, no curation,
              and no repeated games. The AI authors the categories, selects the words, calibrates difficulty, and writes
              the reveal text for each solved group.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              This was my first project where the AI was the content producer, not just a tool. Getting the model to
              produce game data reliably — consistent format, appropriate difficulty, no duplicate words across
              categories — required careful prompt engineering and validation logic. The real challenge was making
              generated content feel handcrafted rather than algorithmic.
            </ProjectDescription>
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/connections-api">
                  connections-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/connections-infrastructure">
                  connections-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/connections-ui">
                  connections-ui (React/TypeScript)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>

        {/* Email — col-span-7 */}
        <motion.div
          className="col-span-12 md:col-span-7"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={emailsRef} title="Email">
            <ProjectUrl>
              URL: <Link href={`https://email.${hostname}`}>{`https://email.${hostname}`}</Link>
            </ProjectUrl>
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              What started as a forwarding alias for my parents grew into a full email client I actually use. The
              migration off GoDaddy needed a working email solution first — so I built one. The result: a React
              application backed by <Link href="https://aws.amazon.com/ses/">SES</Link>,{' '}
              <Link href="https://aws.amazon.com/lambda/">Lambda</Link>, and{' '}
              <Link href="https://aws.amazon.com/dynamodb/">DynamoDB</Link> that handles inbound delivery, outbound
              sending, forwarding rules, and alias configuration — all from a single UI.
            </ProjectDescription>
            <ProjectSectionHeading>Technologies</ProjectSectionHeading>
            <ProjectDescription>
              <Link href="https://aws.amazon.com/ses/">AWS SES</Link> handles both inbound and outbound email.{' '}
              <Link href="https://aws.amazon.com/sqs/">SQS</Link> buffers outgoing messages so delivery is decoupled
              from the trigger, and Node.js Lambdas via{' '}
              <Link href="https://aws.amazon.com/serverless/sam/">AWS SAM</Link> do the actual work. Serverless is a
              natural fit here: traffic is bursty, latency requirements are relaxed, and there&apos;s nothing to keep
              warm between messages.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              Managing DNS properly — MX records, SPF, DKIM — turned out to be the most educational part.{' '}
              <Link href="https://aws.amazon.com/route53/">Route 53</Link> became my standard for domain management and
              came up in every project that followed. The migration succeeded; I now have separate production and test
              domains, and my parents still get their forwarded emails.
            </ProjectDescription>
            <ProjectSectionHeading>Diagram</ProjectSectionHeading>
            <Image
              alt="Diagram of emails project"
              src={emailsDiagram}
              style={{
                height: 'auto',
                maxHeight: '300px',
                objectFit: 'contain',
                width: '100%',
                borderRadius: '0.5rem',
                border: '1px solid var(--rule)',
              }}
            />
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-account-api">
                  emails-accounts-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-email-api">
                  emails-email-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-inbound-service">
                  emails-inbound-service (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-infrastructure">
                  emails-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-queue-api">
                  emails-queue-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-queue-service">
                  emails-queue-service (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/emails-ui">
                  emails-ui (React/TypeScript)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>

        {/* Choosee — col-span-5 */}
        <motion.div
          className="col-span-12 md:col-span-5"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={chooseeRef} title="Choosee">
            <ProjectUrl>
              URL: <Link href={`https://choosee.${hostname}`}>{`https://choosee.${hostname}`}</Link>
            </ProjectUrl>
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              A friend suggested this one: an app that helps a group decide where to eat by presenting restaurant
              options one at a time until everyone agrees. It drew on everything built before it — Lambda backends,
              React frontends, SMS messaging, and Cognito authentication — and introduced GCP integration for the first
              time.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              Choosee was my first time working with <Link href="https://cloud.google.com/">Google Cloud Platform</Link>{' '}
              and the <Link href="https://developers.google.com/maps/documentation/places/web-service">Places API</Link>
              {'. '}Setting up a GCP account, learning the billing model, and integrating the Places API into an
              otherwise AWS-native stack was a practical lesson in cloud agnosticism.
            </ProjectDescription>
            <ProjectSectionHeading>Diagram</ProjectSectionHeading>
            <Image
              alt="Diagram of choosee project"
              src={chooseeDiagram}
              style={{
                height: 'auto',
                maxHeight: '300px',
                objectFit: 'contain',
                width: '100%',
                borderRadius: '0.5rem',
                border: '1px solid var(--rule)',
              }}
            />
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/choosee-infrastructure">
                  choosee-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/choosee-api">
                  choosee-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/choosee-ui">
                  choosee-ui (React/TypeScript)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>

        {/* Root — col-span-5 */}
        <motion.div
          className="col-span-12 md:col-span-5"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={rootRef} title="Root">
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              Every project needs a foundation. This one provisions my AWS environment — IAM users, permission
              boundaries, and the shared infrastructure everything else builds on. I started with{' '}
              <Link href="https://www.pulumi.com/">Pulumi</Link>, which I genuinely liked, but once I adopted{' '}
              <Link href="https://aws.amazon.com/serverless/sam/">AWS SAM</Link> for Lambda work, I was already writing{' '}
              <Link href="https://aws.amazon.com/cloudformation/">CloudFormation</Link>. Consolidating on one tool made
              more sense than maintaining two.
            </ProjectDescription>
            <ProjectDescription>
              Each project gets its own IAM user with scoped credentials and{' '}
              <Link href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">
                permission boundaries
              </Link>
              {'. '}A compromised key can&apos;t become a full account breach.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              Pulumi is excellent — expressive, well-documented, and a pleasure to use. CloudFormation is more verbose,
              but it covers everything I need and keeps the toolchain uniform. Either way, infrastructure in version
              control quickly becomes non-negotiable.
            </ProjectDescription>
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/root-infrastructure">
                  root-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>

        {/* Other — col-span-7 */}
        <motion.div
          className="col-span-12 md:col-span-7"
          initial="hidden"
          variants={cardReveal}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="visible"
        >
          <ProjectCard cardRef={otherRef} title="Other">
            <ProjectUrl>
              URL: <Link href={`https://${hostname}`}>{`https://${hostname}`}</Link>
            </ProjectUrl>
            <ProjectSectionHeading>Objectives</ProjectSectionHeading>
            <ProjectDescription>
              The catch-all for things that didn&apos;t fit neatly elsewhere: this site, an SMS messaging service, and a
              log subscriber that watches <Link href="https://aws.amazon.com/cloudwatch/">CloudWatch</Link> for errors
              and texts me when something goes wrong. The word-game utility is a Python tool that scores letters by
              frequency to surface the highest-value guesses.
            </ProjectDescription>
            <ProjectSectionHeading>Lessons</ProjectSectionHeading>
            <ProjectDescription>
              <Link href="https://aws.amazon.com/pinpoint/">AWS Pinpoint</Link> powers the SMS delivery, and{' '}
              <Link href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html">
                CloudWatch subscription filters
              </Link>{' '}
              route log events to the alert Lambda in near-real time. Small projects, but they made observability feel
              real rather than theoretical.
            </ProjectDescription>
            <ProjectSectionHeading>Source</ProjectSectionHeading>
            <ProjectSourceList>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/dbowland-infrastructure">
                  dbowland-infrastructure (CloudFormation)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/dbowland-ui">
                  dbowland-ui (React/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/high-value-word-finder">
                  high-value-word-finder (Python)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/log-subscriber">
                  log-subscriber (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/scheduler-service">
                  scheduler-service (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/sms-queue-api">
                  sms-queue-api (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
              <li>
                <ProjectSourceLink href="https://github.com/davidbowland/sms-queue-service">
                  sms-queue-service (AWS SAM/TypeScript)
                </ProjectSourceLink>
              </li>
            </ProjectSourceList>
          </ProjectCard>
        </motion.div>
      </ProjectsLayout>

      <ScrollToTopButton onPress={() => introRef.current && introRef.current.scrollIntoView()}>
        <ChevronsUp size={18} />
      </ScrollToTopButton>
    </div>
  )
}

export default ProjectsTable
