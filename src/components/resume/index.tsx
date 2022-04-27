import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  ResultSubDetails,
  ResumeAnchor,
  ResumeBody,
  ResumeContactDetails,
  ResumeContactDetailsList,
  ResumeContactDetailsListItem,
  ResumeContainer,
  ResumeDownloadHeader,
  ResumeHeadshot,
  ResumeImageStyles,
  ResumeJobDescription,
  ResumeJobDescriptionDetail,
  ResumeKeySkills,
  ResumeKeySkillsItem,
  ResumeLink,
  ResumeNameSection,
  ResumeNameSectionName,
  ResumeNameSectionTitle,
  ResumePrimaryDetails,
  ResumeSection,
  ResumeSectionContent,
  ResumeSectionContentTitle,
  ResumeSectionTitle,
  ResumeSectionTitleHeader,
} from './elements'
import { ClearFloat } from '@components/common/elements'
import resumePdf from '@assets/pdf/david-bowland-resume.pdf'

const Resume = (): JSX.Element => {
  return (
    <ResumeContainer>
      <ResumePrimaryDetails>
        <ResumeHeadshot>
          <StaticImage
            alt="Picture of David Bowland"
            src="../../assets/images/David-2019-05-18.jpg"
            style={ResumeImageStyles}
          />
        </ResumeHeadshot>

        <ResumeNameSection>
          <ResumeNameSectionName>David Bowland</ResumeNameSectionName>
          <ResumeNameSectionTitle>Software Developer</ResumeNameSectionTitle>
          <ResumeDownloadHeader>
            <ResumeLink data-amplify-analytics-name="resume-click" data-amplify-analytics-on="click" to={resumePdf}>
              Download Resume
            </ResumeLink>
          </ResumeDownloadHeader>
        </ResumeNameSection>

        <ResumeContactDetails>
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
        </ResumeContactDetails>
        <ClearFloat />
      </ResumePrimaryDetails>

      <ResumeBody>
        <ResumeSection>
          <ResumeSectionTitle>
            <ResumeSectionTitleHeader>Personal Profile</ResumeSectionTitleHeader>
          </ResumeSectionTitle>

          <ResumeSectionContent>
            <article>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>
                  Developer of robust solutions on scalable architecture
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>Effective translator between geek and English</ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>Connoisseur of groan-inducing dad jokes</ResumeJobDescriptionDetail>
              </ResumeJobDescription>
              <ClearFloat />
            </article>
          </ResumeSectionContent>
          <ClearFloat />
        </ResumeSection>

        <ResumeSection>
          <ResumeSectionTitle>
            <ResumeSectionTitleHeader>Experience</ResumeSectionTitleHeader>
          </ResumeSectionTitle>

          <ResumeSectionContent>
            <article>
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
              <ClearFloat />
            </article>

            <article>
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
              <ClearFloat />
            </article>

            <article>
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
              <ClearFloat />
            </article>
          </ResumeSectionContent>
          <ClearFloat />
        </ResumeSection>

        <ResumeSection>
          <ResumeSectionTitle>
            <ResumeSectionTitleHeader>Skills</ResumeSectionTitleHeader>
          </ResumeSectionTitle>

          <ResumeSectionContent>
            <article>
              <ResumeSectionContentTitle>Languages</ResumeSectionContentTitle>
              <ResultSubDetails>Proficient in</ResultSubDetails>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>TypeScript</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Java</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Groovy</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>JavaScript</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Python</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ResultSubDetails>Familiar with</ResultSubDetails>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>ASP/ASP.NET</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>C++</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>COBOL</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>PHP</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Terraform</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>SQL</ResumeSectionContentTitle>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>DB2</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Microsoft SQL Server</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>MySQL</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Oracle Database</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>PostgreSQL</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>NoSQL</ResumeSectionContentTitle>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>DynamoDB</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>Technologies</ResumeSectionContentTitle>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>Argo</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>CircleCI</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Docker</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Git</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Kibana</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Kubernetes</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Jenkins</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Jira</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>NewRelic</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Splunk</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>AWS</ResumeSectionContentTitle>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>Athena</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>CloudFormation·</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>CloudWatch</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>ECS</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Lambda</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Pinpoint</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>QuickSight</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>RDS</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Route53</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>S3</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>SES</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>SNS</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>SQS</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Secrets Manager</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>
          </ResumeSectionContent>
          <ClearFloat />
        </ResumeSection>

        <ResumeSection>
          <ResumeSectionTitle>
            <ResumeSectionTitleHeader>Education</ResumeSectionTitleHeader>
          </ResumeSectionTitle>

          <ResumeSectionContent>
            <article>
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
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>
                <ResumeAnchor href="https://www.cpsk12.org/HHS" rel="noopener noreferrer">
                  David H. Hickman High School &mdash; Columbia,&nbsp;MO
                </ResumeAnchor>
              </ResumeSectionContentTitle>
              <ClearFloat />
            </article>
          </ResumeSectionContent>
          <ClearFloat />
        </ResumeSection>
      </ResumeBody>
    </ResumeContainer>
  )
}

export default Resume
