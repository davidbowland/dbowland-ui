import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import { Link } from 'gatsby'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@mui/material/Typography'

import { ProjectImageStyles } from './elements'

const Project = ({ children, title }: { children: JSX.Element | JSX.Element[]; title: string }): JSX.Element => (
  <>
    <Grid item sm={3} sx={{ textAlign: { sm: 'left', xs: 'center' } }} xs={12}>
      <Typography sx={{ color: '#cf8a05', paddingTop: { sm: '1em', xs: 0 } }} variant="h4">
        {title}
      </Typography>
    </Grid>
    <Grid item sm={9} xs={12}>
      <Stack padding={2} spacing={2}>
        {children}
      </Stack>
    </Grid>
  </>
)

const ProjectsTable = (): JSX.Element => {
  const chooseeRef = useRef<HTMLDivElement>(null)
  const contentsRef = useRef<HTMLDivElement>(null)
  const dbdBuildMakerRef = useRef<HTMLDivElement>(null)
  const emailsRef = useRef<HTMLDivElement>(null)
  const jokesRef = useRef<HTMLDivElement>(null)
  const otherRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const hostname = (typeof window !== 'undefined' && window.location.hostname) || 'dbowland.com'

  return (
    <Stack margin="auto" padding={4} spacing={2}>
      <Grid container ref={contentsRef}>
        <Project title="Contents">
          <Typography variant="h5">Introduction:</Typography>
          <Typography>
            My professional life intersects with some cool technologies such as{' '}
            <Link to="https://reactjs.org/">React</Link>,{' '}
            <Link to="https://spring.io/projects/spring-boot">Spring Boot</Link>, and a panoply of AWS services, but I
            wanted to expand my horizons by completing a few side projects. The following side projects required setting
            up my own AWS and GCP accounts, registering a couple of domains, and even creating an Alexa skill! I&apos;m
            pleased to report I was able to use them to generate some innovative ideas in professional contexts, as
            well.
          </Typography>
          <Box>
            <Typography variant="h5">Personal Projects:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => rootRef.current && rootRef.current.scrollIntoView()}>
                  <ListItemText primary="Root - Infrastructure" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => emailsRef.current && emailsRef.current.scrollIntoView()}>
                  <ListItemText primary="Email Forwarding - DynamoDB, Lambda, SES, SQS" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => jokesRef.current && jokesRef.current.scrollIntoView()}>
                  <ListItemText primary="Jokes - DynamoDB, Lambda, Polly, React" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => dbdBuildMakerRef.current && dbdBuildMakerRef.current.scrollIntoView()}>
                  <ListItemText primary="DBD Build Maker - DynamoDB, Lambda, React" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => chooseeRef.current && chooseeRef.current.scrollIntoView()}>
                  <ListItemText primary="Choosee - DynamoDB, Lambda, React" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => otherRef.current && otherRef.current.scrollIntoView()}>
                  <ListItemText primary="Other - Lambda, React, SQS" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={rootRef}>
        <Project title="Root">
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            This project was created to set up my AWS environment. Originally, I used{' '}
            <Link to="https://www.pulumi.com/">Pulumi</Link> to manage my infrastructure as code. It is a terrific
            product, but when I started using{' '}
            <Link to="https://aws.amazon.com/serverless/sam/">AWS Serverless Application Model (SAM)</Link>, I became
            familiar with <Link to="https://aws.amazon.com/cloudformation/">AWS CloudFormation</Link>. After some
            thought, I made the decision that it would be easier for all infrastructure to use the same technology, so I
            converted this project to CloudFormation.
          </Typography>
          <Typography>
            Users including my own user are managed by this project. It also contains an infrastructure user for every
            project, including itself, so that credentials are not shared and{' '}
            <Link to="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">
              permission boundaries
            </Link>{' '}
            can be applied.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            It was very enjoyable learning Pulumi and more about the concept of infrastructure as code. CloudFormation,
            likewise, is decently easy to use while accomplishing most of what I need. I&apos;m thankful these projects
            have given me exposure to it.
          </Typography>
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/root-infrastructure">
                  <ListItemText primary="root-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={emailsRef}>
        <Project title="Email Forwarding">
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            I was using <Link to="https://www.godaddy.com/">GoDaddy</Link> as a host, but it is expensive for my needs
            and I wanted a project to test my AWS skills. Unfortunately, one thing stopping me from switching was an
            email alias I set up for my parents on my GoDaddy site. That alias automatically forwarded both of them any
            email it received. Therefore, I had to recreate that functionality before I could migrate providers. As a
            handy side effect, having an endpoint that allows me to send emails could be useful for future projects.
          </Typography>
          <Typography variant="h5">Technologies:</Typography>
          <Typography>
            For this project, I elected to use <Link to="https://aws.amazon.com/ses/">AWS SES</Link> to send and receive
            emails, since that&apos;s the AWS solution. I decided on{' '}
            <Link to="https://aws.amazon.com/serverless/sam/">AWS Serverless Application Model (SAM)</Link> to create
            NodeJS lambdas to power the project, a practice that worked so well I was able to bring into my professional
            life. Lambdas are perfect for this project since they work so well with elastic demand and processing speed
            isn&apos;t very relevant.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            Perhaps the most useful thing I learned in this project was how to register and manage a website with{' '}
            <Link to="https://aws.amazon.com/route53/">AWS Route53</Link>. In addition to using Route 53 to set up MX
            DNS records for email traffic, I created an <Link to="https://aws.amazon.com/sqs/">AWS SQS</Link> queue to
            hold emails while they wait to be sent by a lambda. With this project complete, I was able to eventually
            migrate my GoDaddy domain, meaning I now have both a production and a test domain.
          </Typography>
          <Typography variant="h5">Diagram:</Typography>
          <StaticImage
            alt="Diagram of emails project"
            imgStyle={{ objectFit: 'contain' }}
            src="../../assets/images/emails-diagram.png"
            style={ProjectImageStyles}
          />
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/emails-account-api">
                  <ListItemText primary="emails-accounts-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/emails-inbound-service">
                  <ListItemText primary="emails-inbound-service (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/emails-infrastructure">
                  <ListItemText primary="emails-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/emails-queue-api">
                  <ListItemText primary="emails-queue-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/emails-queue-service">
                  <ListItemText primary="emails-queue-service (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={jokesRef}>
        <Project title="Jokes">
          <Typography variant="h5">
            URL: <Link to={`https://jokes.${hostname}`}>{`https://jokes.${hostname}`}</Link>
          </Typography>
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            This project was my first to utilize a UI. I made a number of key decisions, including choosing{' '}
            <Link to="https://www.gatsbyjs.com/">Gatsby</Link> as my static site generator. While it isn&apos;t the
            fastest at compiling or the most popular option, it is highly specialized for creating fast static sites and
            I had a positive experience with it on a past project.
          </Typography>
          <Typography variant="h5">Technologies:</Typography>
          <Typography>
            All UI projects leverage the material UI library <Link to="https://mui.com/">MUI</Link> and use either{' '}
            <Link to="https://emotion.sh/docs/styled">Emotion</Link> or{' '}
            <Link to="https://styled-components.com/">styled-components</Link>. Using a library helps drive
            accessibility in addition to providing a familiar experience. Icons from the MUI library are used in all UI
            projects, as well.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            I learned to use stencils writing this project and designed the loading button I would later use in other
            projects. I also spent a lot of time thinking about how to uniformly pass both data and associated ID
            information when requesting a set of records, something I think this project does notably well. Plus, I got
            to build my first Alexa skill and use <Link to="https://aws.amazon.com/polly/">AWS Polly</Link> for
            text-to-speech!
          </Typography>
          <Typography variant="h5">Diagram:</Typography>
          <StaticImage
            alt="Diagram of jokes project"
            imgStyle={{ objectFit: 'contain' }}
            src="../../assets/images/jokes-diagram.png"
            style={ProjectImageStyles}
          />
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/jokes-api">
                  <ListItemText primary="jokes-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/jokes-infrastructure">
                  <ListItemText primary="jokes-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/jokes-skill">
                  <ListItemText primary="jokes-skill (AWS ASK SDK/NodeJS)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/jokes-ui">
                  <ListItemText primary="jokes-ui (React/TypeScript)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={chooseeRef}>
        <Project title="Choosee">
          <Typography variant="h5">
            URL: <Link to={`https://choosee.${hostname}`}>{`https://choosee.${hostname}`}</Link>
          </Typography>
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            A friend of mine suggested this project. Most noteworthy, several other projects were created to build up to
            this one, including technology such as lambda back-ends, React front-ends, SMS messaging, Cognito
            authentication, and more.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            This project was great because I hadn&apos;t worked with{' '}
            <Link to="https://cloud.google.com/">Google Cloud Platform</Link>, let alone{' '}
            <Link to="https://developers.google.com/maps/documentation/places/web-service">Places API</Link>, in the
            past, so I got to set up an account and learn how to interact with that service. On the AWS side, this
            project allowed me to iterate on concepts learned in previous projects.
          </Typography>
          <Typography variant="h5">Diagram:</Typography>
          <StaticImage
            alt="Diagram of choosee project"
            imgStyle={{ objectFit: 'contain' }}
            src="../../assets/images/choosee-diagram.png"
            style={ProjectImageStyles}
          />
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/choosee-infrastructure">
                  <ListItemText primary="choosee-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/choosee-maps-api">
                  <ListItemText primary="choosee-maps-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/choosee-session-api">
                  <ListItemText primary="choosee-session-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/choosee-ui">
                  <ListItemText primary="choosee-ui (React/TypeScript)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={dbdBuildMakerRef}>
        <Project title="DBD Build Maker">
          <Typography variant="h5">
            URL: <Link to={`https://dbd.${hostname}`}>{`https://dbd.${hostname}`}</Link>
          </Typography>
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            I began this project wanting to offload authentication to a third-party. I started by selecting{' '}
            <Link to="https://twitch.tv">Twitch</Link> as a company with the required API and ended up building a quite
            full-featured website. The integration not only allows me to verify authentication but also to authorize
            users based on the access information returned by{' '}
            <Link to="https://dev.twitch.tv/docs/api/">Twitch APIs</Link>.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            Building third-party authentication into this app was an enjoyable experience. This project further honed my
            front-end skills by giving me extensive exposure to the dialog, grid, and x-data-grid components of{' '}
            <Link to="https://mui.com/">MUI</Link>.
          </Typography>
          <Typography variant="h5">Diagram:</Typography>
          <StaticImage
            alt="Diagram of dbd-build-maker project"
            imgStyle={{ objectFit: 'contain' }}
            src="../../assets/images/dbd-build-maker-diagram.png"
            style={ProjectImageStyles}
          />
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/dbd-build-maker-api">
                  <ListItemText primary="dbd-build-maker-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/dbd-build-maker-infrastructure">
                  <ListItemText primary="dbd-build-maker-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/dbd-build-maker-ui">
                  <ListItemText primary="dbd-build-maker-ui (React/TypeScript)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Divider />
      <Grid container ref={otherRef}>
        <Project title="Other">
          <Typography variant="h5">
            URL: <Link to={`https://${hostname}`}>{`https://${hostname}`}</Link>
          </Typography>
          <Typography variant="h5">Objectives:</Typography>
          <Typography>
            This project includes this website and a few miscellaneous repositories including those that send SMS
            messages and a log subscriber, which watches for errors in{' '}
            <Link to="https://aws.amazon.com/cloudwatch/">AWS CloudWatch</Link> and alerts me via SMS when an error
            occurs.
          </Typography>
          <Typography variant="h5">Lessons:</Typography>
          <Typography>
            Creating these repositories taught me about using{' '}
            <Link to="https://aws.amazon.com/pinpoint/">AWS Pinpoint</Link>, both for analytics and for sending SMS
            messages. Further, it made me become more familiar with log{' '}
            <Link to="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html">
              subscription filters
            </Link>{' '}
            and other mechanisms for monitoring for errors.
          </Typography>
          <Box>
            <Typography variant="h5">Source:</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/dbowland-infrastructure">
                  <ListItemText primary="dbowland-infrastructure (CloudFormation)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/dbowland-ui">
                  <ListItemText primary="dbowland-ui (React/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/log-subscriber">
                  <ListItemText primary="log-subscriber (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/scheduler-service">
                  <ListItemText primary="scheduler-service (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/sms-queue-api">
                  <ListItemText primary="sms-queue-api (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="https://github.com/davidbowland/sms-queue-service">
                  <ListItemText primary="sms-queue-service (AWS SAM/TypeScript)" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Project>
      </Grid>
      <Fab
        aria-label="Scroll to top"
        color="primary"
        onClick={() => contentsRef.current && contentsRef.current.scrollIntoView()}
        sx={{ bottom: 16, position: 'fixed', right: 16 }}
      >
        <KeyboardDoubleArrowUpRoundedIcon />
      </Fab>
    </Stack>
  )
}

export default ProjectsTable
