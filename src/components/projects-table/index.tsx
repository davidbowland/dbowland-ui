import { Button } from '@heroui/react'
import { ChevronsUp } from 'lucide-react'
import Image from 'next-export-optimize-images/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { ProjectCard, ProjectNavButton, ProjectSectionHeading, ProjectSourceLink } from './elements'
import chooseeDiagram from '@assets/images/choosee-diagram.png'
import emailsDiagram from '@assets/images/emails-diagram.png'
import jokesDiagram from '@assets/images/jokes-diagram.png'

const ProjectsTable = (): JSX.Element => {
  const chooseeRef = useRef<HTMLDivElement>(null)
  const contentsRef = useRef<HTMLDivElement>(null)
  const emailsRef = useRef<HTMLDivElement>(null)
  const jokesRef = useRef<HTMLDivElement>(null)
  const otherRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const [hostname, setHostname] = useState('dbowland.com')

  // Update hostname on client to avoid SSR/hydration mismatch
  useEffect(() => {
    setHostname(window.location.hostname)
  }, [])

  return (
    <div className="flex flex-col gap-4 py-2">
      {/* Contents */}
      <ProjectCard cardRef={contentsRef} title="Contents">
        <p className="text-sm leading-relaxed">
          Work keeps me busy with React, Spring Boot, and a healthy slice of AWS — but side projects are where I get to
          choose the problem. The work below involved standing up my own AWS and GCP accounts, registering domains,
          wiring up an Alexa skill, and generally learning by doing. More than once, something I built here found its
          way into a professional context.
        </p>
        <div>
          <ProjectSectionHeading>Personal Projects</ProjectSectionHeading>
          <ul className="list-none p-0 m-0 flex flex-col">
            <li>
              <ProjectNavButton onPress={() => rootRef.current && rootRef.current.scrollIntoView()}>
                Root - Infrastructure
              </ProjectNavButton>
            </li>
            <li>
              <ProjectNavButton onPress={() => emailsRef.current && emailsRef.current.scrollIntoView()}>
                Email Forwarding - DynamoDB, Lambda, SES, SQS
              </ProjectNavButton>
            </li>
            <li>
              <ProjectNavButton onPress={() => jokesRef.current && jokesRef.current.scrollIntoView()}>
                Jokes - DynamoDB, Lambda, Polly, React
              </ProjectNavButton>
            </li>
            <li>
              <ProjectNavButton onPress={() => chooseeRef.current && chooseeRef.current.scrollIntoView()}>
                Choosee - DynamoDB, Lambda, React
              </ProjectNavButton>
            </li>
            <li>
              <ProjectNavButton onPress={() => otherRef.current && otherRef.current.scrollIntoView()}>
                Other - Lambda, React, SQS
              </ProjectNavButton>
            </li>
          </ul>
        </div>
      </ProjectCard>

      {/* Root */}
      <ProjectCard cardRef={rootRef} title="Root">
        <ProjectSectionHeading>Objectives</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          Every project needs a foundation. This one provisions my AWS environment — IAM users, permission boundaries,
          and the shared infrastructure everything else builds on. I started with{' '}
          <Link href="https://www.pulumi.com/">Pulumi</Link>, which I genuinely liked, but once I adopted{' '}
          <Link href="https://aws.amazon.com/serverless/sam/">AWS SAM</Link> for Lambda work, I was already writing{' '}
          <Link href="https://aws.amazon.com/cloudformation/">CloudFormation</Link>. Consolidating on one tool made more
          sense than maintaining two.
        </p>
        <p className="text-sm leading-relaxed">
          Each project gets its own IAM user with scoped credentials and{' '}
          <Link href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">
            permission boundaries
          </Link>
          , so a compromised key can&apos;t become a full account breach.
        </p>
        <ProjectSectionHeading>Lessons</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          Pulumi is excellent — expressive, well-documented, and a pleasure to use. CloudFormation is more verbose, but
          it covers everything I need and keeps the toolchain uniform. Either way, having infrastructure in version
          control is one of those practices that quickly becomes non-negotiable.
        </p>
        <ProjectSectionHeading>Source</ProjectSectionHeading>
        <ul className="list-none p-0 m-0">
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/root-infrastructure">
              root-infrastructure (CloudFormation)
            </ProjectSourceLink>
          </li>
        </ul>
      </ProjectCard>

      {/* Email Forwarding */}
      <ProjectCard cardRef={emailsRef} title="Email Forwarding">
        <ProjectSectionHeading>Objectives</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          I wanted to move off GoDaddy — overpriced for what I needed — but one thing was in the way: an email alias I
          had set up for my parents that forwarded everything to both of them. Before I could migrate, I had to rebuild
          that. The upside was a reusable email-sending API that I could call from other projects down the road.
        </p>
        <ProjectSectionHeading>Technologies</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          <Link href="https://aws.amazon.com/ses/">AWS SES</Link> handles both inbound and outbound email.{' '}
          <Link href="https://aws.amazon.com/sqs/">SQS</Link> buffers outgoing messages so delivery is decoupled from
          the trigger, and Node.js Lambdas via <Link href="https://aws.amazon.com/serverless/sam/">AWS SAM</Link> do the
          actual work. Serverless is a natural fit here: traffic is bursty, latency requirements are relaxed, and
          there&apos;s nothing to keep warm between messages.
        </p>
        <ProjectSectionHeading>Lessons</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          Managing DNS properly — MX records, SPF, DKIM — turned out to be the most educational part. I also got
          comfortable with <Link href="https://aws.amazon.com/route53/">Route 53</Link> for domain management, which
          came up again in every project that followed. The migration succeeded; I now have separate production and test
          domains, and my parents still get their forwarded emails.
        </p>
        <ProjectSectionHeading>Diagram</ProjectSectionHeading>
        <Image
          alt="Diagram of emails project"
          src={emailsDiagram}
          style={{ height: 'auto', maxHeight: '300px', objectFit: 'contain', width: '100%' }}
        />
        <ProjectSectionHeading>Source</ProjectSectionHeading>
        <ul className="list-none p-0 m-0">
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/emails-account-api">
              emails-accounts-api (AWS SAM/TypeScript)
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
        </ul>
      </ProjectCard>

      {/* Jokes */}
      <ProjectCard cardRef={jokesRef} title="Jokes">
        <p className="text-sm">
          URL: <Link href={`https://jokes.${hostname}`}>{`https://jokes.${hostname}`}</Link>
        </p>
        <ProjectSectionHeading>Objectives</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          This was my first project with a real UI. The domain was simple — a jokes app — which made it a good sandbox
          for settling on a frontend stack. I started with <Link href="https://www.gatsbyjs.com/">Gatsby</Link>, which
          is a easy way to get a simple site going, but eventually converted it to the more popular{' '}
          <Link href="https://nextjs.org/">Next.js</Link>.
        </p>
        <ProjectSectionHeading>Technologies</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          All UI projects use <Link href="https://nextjs.org/">Next.js</Link>,{' '}
          <Link href="https://www.heroui.com/">HeroUI</Link> for components, and{' '}
          <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for styling. A component library pulls its weight in
          accessibility and consistency; Tailwind handles everything the library leaves to you. Icons throughout come
          from <Link href="https://lucide.dev/">Lucide</Link>.
        </p>
        <ProjectSectionHeading>Lessons</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          Designing consistent data-fetching patterns across DynamoDB records was worth the effort — those conventions
          carried forward into later projects. The real treat was building my first Alexa skill and wiring up{' '}
          <Link href="https://aws.amazon.com/polly/">AWS Polly</Link> for text-to-speech, which still makes me smile
          every time someone asks Alexa to tell them a joke.
        </p>
        <ProjectSectionHeading>Diagram</ProjectSectionHeading>
        <Image
          alt="Diagram of jokes project"
          src={jokesDiagram}
          style={{ height: 'auto', maxHeight: '300px', objectFit: 'contain', width: '100%' }}
        />
        <ProjectSectionHeading>Source</ProjectSectionHeading>
        <ul className="list-none p-0 m-0">
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/jokes-api">
              jokes-api (AWS SAM/TypeScript)
            </ProjectSourceLink>
          </li>
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/jokes-infrastructure">
              jokes-infrastructure (CloudFormation)
            </ProjectSourceLink>
          </li>
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/jokes-skill">
              jokes-skill (AWS ASK SDK/NodeJS)
            </ProjectSourceLink>
          </li>
          <li>
            <ProjectSourceLink href="https://github.com/davidbowland/jokes-ui">
              jokes-ui (React/TypeScript)
            </ProjectSourceLink>
          </li>
        </ul>
      </ProjectCard>

      {/* Choosee */}
      <ProjectCard cardRef={chooseeRef} title="Choosee">
        <p className="text-sm">
          URL: <Link href={`https://choosee.${hostname}`}>{`https://choosee.${hostname}`}</Link>
        </p>
        <ProjectSectionHeading>Objectives</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          A friend suggested this one: an app that helps a group decide where to eat by presenting restaurant options
          one at a time until everyone agrees. It drew on everything built before it — Lambda backends, React frontends,
          SMS messaging, and Cognito authentication — and pushed into new territory on top.
        </p>
        <ProjectSectionHeading>Lessons</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          Choosee was my first time working with <Link href="https://cloud.google.com/">Google Cloud Platform</Link> and
          the <Link href="https://developers.google.com/maps/documentation/places/web-service">Places API</Link>.
          Setting up a GCP account, learning the billing model, and integrating a non-AWS service into an otherwise
          AWS-native stack was a useful exercise in not assuming everything lives in one cloud.
        </p>
        <ProjectSectionHeading>Diagram</ProjectSectionHeading>
        <Image
          alt="Diagram of choosee project"
          src={chooseeDiagram}
          style={{ height: 'auto', maxHeight: '300px', objectFit: 'contain', width: '100%' }}
        />
        <ProjectSectionHeading>Source</ProjectSectionHeading>
        <ul className="list-none p-0 m-0">
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
        </ul>
      </ProjectCard>

      {/* Other */}
      <ProjectCard cardRef={otherRef} title="Other">
        <p className="text-sm">
          URL: <Link href={`https://${hostname}`}>{`https://${hostname}`}</Link>
        </p>
        <ProjectSectionHeading>Objectives</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          The catch-all for things that didn&apos;t fit neatly elsewhere: this site, an SMS messaging service, and a log
          subscriber that watches <Link href="https://aws.amazon.com/cloudwatch/">CloudWatch</Link> for errors and texts
          me when something goes wrong.
        </p>
        <ProjectSectionHeading>Lessons</ProjectSectionHeading>
        <p className="text-sm leading-relaxed">
          <Link href="https://aws.amazon.com/pinpoint/">AWS Pinpoint</Link> powers the SMS delivery, and{' '}
          <Link href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html">
            CloudWatch subscription filters
          </Link>{' '}
          route log events to the alert Lambda in near-real time. Small projects, but they made observability feel real
          rather than theoretical.
        </p>
        <ProjectSectionHeading>Source</ProjectSectionHeading>
        <ul className="list-none p-0 m-0">
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
        </ul>
      </ProjectCard>

      <Button
        aria-label="Scroll to top"
        className="fixed bottom-4 right-4 rounded-full"
        isIconOnly
        onPress={() => contentsRef.current && contentsRef.current.scrollIntoView()}
        variant="primary"
      >
        <ChevronsUp />
      </Button>
    </div>
  )
}

export default ProjectsTable
