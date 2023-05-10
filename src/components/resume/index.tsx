import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import React from 'react'
import Stack from '@mui/material/Stack'
import { StaticImage } from 'gatsby-plugin-image'

import {
  ResultSubDetails,
  ResumeAnchor,
  ResumeContactDetailsList,
  ResumeContactDetailsListItem,
  ResumeContainer,
  ResumeDownloadHeader,
  ResumeImageStyles,
  ResumeJobDescription,
  ResumeJobDescriptionDetail,
  ResumeLink,
  ResumeNameSectionName,
  ResumeNameSectionTitle,
  ResumeSectionContentTitle,
  ResumeSectionTitleHeader,
} from './elements'
import resumePdf from '@assets/pdf/david-bowland-resume.pdf'

const ResumeSection = ({ children, title }: { children: JSX.Element | JSX.Element[]; title: string }): JSX.Element => (
  <>
    <Grid container sx={{ p: '0.5em 0' }}>
      <Grid item sm={3} sx={{ p: '0.5em' }} xs={12}>
        <ResumeSectionTitleHeader>{title}</ResumeSectionTitleHeader>
      </Grid>

      <Grid item sm={9} sx={{ p: '1em' }} xs={12}>
        {children}
      </Grid>
    </Grid>
  </>
)

const Resume = (): JSX.Element => {
  const renderSkillsGrid = (...args: string[]): JSX.Element => (
    <Grid container spacing={1}>
      {args.map((value, index) => (
        <Grid item key={index} md={4} sm={6} xs={12}>
          {value}
        </Grid>
      ))}
    </Grid>
  )

  return (
    <ResumeContainer>
      <Grid container sx={{ borderBottom: '2px solid #cf8a05' }}>
        <Grid item sm={2} sx={{ margin: '1.5em auto', p: '0.5em', textAlign: 'center' }} xs={12}>
          <StaticImage
            alt="Picture of David Bowland"
            src="../../assets/images/David-2023-05-10.jpg"
            style={ResumeImageStyles}
          />
        </Grid>

        <Grid item md={7} sm={6} sx={{ p: '0.5em', textAlign: { sm: 'left', xs: 'center' } }} xs={12}>
          <ResumeNameSectionName>David Bowland</ResumeNameSectionName>
          <ResumeNameSectionTitle>Software Developer</ResumeNameSectionTitle>
          <ResumeDownloadHeader>
            <ResumeLink data-amplify-analytics-name="resume-click" data-amplify-analytics-on="click" to={resumePdf}>
              Download Resume
            </ResumeLink>
          </ResumeDownloadHeader>
        </Grid>

        <Grid item md={3} sm={4} sx={{ p: '0.5em', textAlign: { sm: 'left', xs: 'center' } }} xs={12}>
          <ResumeContactDetailsList>
            <ResumeContactDetailsListItem>
              e:{' '}
              <ResumeAnchor
                data-amplify-analytics-name="email-click"
                data-amplify-analytics-on="click"
                href="mailto:david@dbowland.com"
              >
                david@dbowland.com
              </ResumeAnchor>
            </ResumeContactDetailsListItem>
            <ResumeContactDetailsListItem>
              w:{' '}
              <ResumeAnchor
                data-amplify-analytics-name="website-click"
                data-amplify-analytics-on="click"
                href="https://dbowland.com"
              >
                dbowland.com
              </ResumeAnchor>
            </ResumeContactDetailsListItem>
            <ResumeContactDetailsListItem>
              m:{' '}
              <ResumeAnchor
                data-amplify-analytics-name="tel-click"
                data-amplify-analytics-on="click"
                href="tel:+14178940079"
              >
                417.894.0079
              </ResumeAnchor>
            </ResumeContactDetailsListItem>
          </ResumeContactDetailsList>
        </Grid>
      </Grid>

      <Stack spacing={1}>
        <ResumeSection title="Personal Profile">
          <ResumeJobDescription>
            <ResumeJobDescriptionDetail>
              Developer of robust solutions on scalable architecture
            </ResumeJobDescriptionDetail>
            <ResumeJobDescriptionDetail>Effective translator between geek and English</ResumeJobDescriptionDetail>
            <ResumeJobDescriptionDetail>Connoisseur of groan-inducing dad jokes</ResumeJobDescriptionDetail>
          </ResumeJobDescription>
        </ResumeSection>
        <Divider />

        <ResumeSection title="Experience">
          <Stack spacing={2}>
            <div>
              <ResumeSectionContentTitle>
                Technical Lead at{' '}
                <ResumeAnchor href="https://www.talentreef.com/" rel="noopener noreferrer">
                  TalentReef
                </ResumeAnchor>
              </ResumeSectionContentTitle>
              <ResultSubDetails>April&nbsp;2021 - Present</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>
                  Lead the highest performing feature team, a title earned six months after I took over a formerly
                  production support team
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Plan architecture for new design, heavily leveraging Spring Boot in ECS, Node Lambdas, Postgres in
                  RDS, and other AWS services
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Mentor developers in best practices and establish procedures to enforce those practices
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Mentor other leads in effective leadership and value delivery
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Assist with DevOps using CloudFormation, Terraform, and especially Shell scripting to automate
                  repetitive tasks
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Use Agile methodology with two-week sprints organized on Jira
                </ResumeJobDescriptionDetail>
              </ResumeJobDescription>
            </div>

            <div>
              <ResumeSectionContentTitle>
                Software Developer at{' '}
                <ResumeAnchor href="https://www.carfax.com/" rel="noopener noreferrer">
                  Carfax
                </ResumeAnchor>
              </ResumeSectionContentTitle>
              <ResultSubDetails>March&nbsp;2020 - April&nbsp;2021</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>
                  Developed Spring Boot / Spring Batch apps in Groovy and Java 8
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Developed Node.js apps, using React with webpack for frontend
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Deployed apps using Jenkins, either Docker images to Kubernetes on AWS or RPMs to DC 3.0 on-premise
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Went from new hire to acting team leader in less than 10 months
                </ResumeJobDescriptionDetail>
              </ResumeJobDescription>
            </div>

            <div>
              <ResumeSectionContentTitle>
                Senior Programmer Analyst at{' '}
                <ResumeAnchor href="https://www.showmeboone.com/" rel="noopener noreferrer">
                  Boone County Government
                </ResumeAnchor>
              </ResumeSectionContentTitle>
              <ResultSubDetails>November&nbsp;2014 - March&nbsp;2020</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>
                  Developed full-stack web applications using CSS, HTML, and vanilla JavaScript with ASP, ASP.NET, or
                  Java backend
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Developed COBOL and IBM CL applications on IBM System i midrange
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>Acted as project manager for two major projects</ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Earned three performance-based increases outside annual review
                </ResumeJobDescriptionDetail>
              </ResumeJobDescription>
            </div>
          </Stack>
        </ResumeSection>
        <Divider />

        <ResumeSection title="Skills">
          <Stack spacing={2}>
            <div>
              <ResumeSectionContentTitle>Languages</ResumeSectionContentTitle>
              <ResultSubDetails>Proficient in</ResultSubDetails>
              {renderSkillsGrid('TypeScript', 'Java', 'Groovy', 'JavaScript', 'Python')}
              <ResultSubDetails>Familiar with</ResultSubDetails>
              {renderSkillsGrid('Terraform', 'ASP/ASP.NET', 'C++', 'COBOL', 'PHP')}
            </div>

            <div>
              <ResumeSectionContentTitle>SQL</ResumeSectionContentTitle>
              {renderSkillsGrid('PostgreSQL', 'Microsoft SQL Server', 'DB2', 'MySQL', 'Oracle Database')}
            </div>

            <div>
              <ResumeSectionContentTitle>NoSQL</ResumeSectionContentTitle>
              {renderSkillsGrid('DynamoDB')}
            </div>

            <div>
              <ResumeSectionContentTitle>Technologies</ResumeSectionContentTitle>
              {renderSkillsGrid(
                'Argo',
                'CircleCI',
                'Docker',
                'Git',
                'Kibana',
                'Kubernetes',
                'Jenkins',
                'Jira',
                'NewRelic',
                'Splunk'
              )}
            </div>

            <div>
              <ResumeSectionContentTitle>AWS</ResumeSectionContentTitle>
              {renderSkillsGrid(
                'Athena',
                'CloudFormation',
                'CloudWatch',
                'ECS',
                'Lambda',
                'Pinpoint',
                'QuickSight',
                'RDS',
                'S3',
                'SES',
                'SNS',
                'SQS',
                'Secrets Manager'
              )}
            </div>
          </Stack>
        </ResumeSection>
        <Divider />

        <ResumeSection title="Education">
          <Stack spacing={2}>
            <div>
              <ResumeSectionContentTitle>
                <ResumeAnchor href="https://ccis.edu/" rel="noopener noreferrer">
                  Columbia College &mdash; Columbia,&nbsp;MO
                </ResumeAnchor>
              </ResumeSectionContentTitle>
              <ResultSubDetails>Bachelor of Science &mdash; GPA&nbsp;3.68</ResultSubDetails>
              <ResultSubDetails>Major:&nbsp;Computer Science &mdash; Minor:&nbsp;Business</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>Graduated cum laude with a GPA of 3.68/4.0</ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>Earned an A in all computer science classes</ResumeJobDescriptionDetail>
              </ResumeJobDescription>
            </div>

            <div>
              <ResumeSectionContentTitle>
                <ResumeAnchor href="https://www.cpsk12.org/HHS" rel="noopener noreferrer">
                  David H. Hickman High School &mdash; Columbia,&nbsp;MO
                </ResumeAnchor>
              </ResumeSectionContentTitle>
            </div>
          </Stack>
        </ResumeSection>
      </Stack>
    </ResumeContainer>
  )
}

export default Resume
