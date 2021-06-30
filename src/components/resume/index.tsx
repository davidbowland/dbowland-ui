import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
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
  ResultSubDetails,
} from './elements'
import { ClearFloat } from '@components/common/elements'
import resumePdf from '@assets/pdf/david-bowland-resume.pdf'

const Resume = (): JSX.Element => {
  return (
    <ResumeContainer>
      <ResumePrimaryDetails>
        <ResumeHeadshot>
          <StaticImage
            src="../../assets/images/David-2019-05-18.jpg"
            alt="Picture of David Bowland"
            style={ResumeImageStyles}
          />
        </ResumeHeadshot>

        <ResumeNameSection>
          <ResumeNameSectionName>David Bowland</ResumeNameSectionName>
          <ResumeNameSectionTitle>Software Developer</ResumeNameSectionTitle>
          <ResumeDownloadHeader>
            <ResumeLink to={resumePdf}>Download Resume</ResumeLink>
          </ResumeDownloadHeader>
        </ResumeNameSection>

        <ResumeContactDetails>
          <ResumeContactDetailsList>
            <ResumeContactDetailsListItem>
              e: <ResumeAnchor href="mailto:david@dbowland.com">david@dbowland.com</ResumeAnchor>
            </ResumeContactDetailsListItem>
            <ResumeContactDetailsListItem>
              w: <ResumeAnchor href="https://dbowland.com">dbowland.com</ResumeAnchor>
            </ResumeContactDetailsListItem>
            <ResumeContactDetailsListItem>
              m: <ResumeAnchor href="tel:+14178940079">417.894.0079</ResumeAnchor>
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
                <ResumeJobDescriptionDetail>Developer of robust solutions</ResumeJobDescriptionDetail>
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
              <ResultSubDetails>March&nbsp;2021 - Present</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>Assist in migrating existing projects to AWS</ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Improve test coverage and automate testing in Node.js
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
              <ResultSubDetails>March&nbsp;2020 - March&nbsp;20201</ResultSubDetails>
              <ResumeJobDescription>
                <ResumeJobDescriptionDetail>
                  Develop Spring Boot / Spring Batch apps in Groovy and Java 8
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Develop Node.js apps, using React with webpack for frontend
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Use Agile methodology with two-week sprints organized on Jira
                </ResumeJobDescriptionDetail>
                <ResumeJobDescriptionDetail>
                  Deploy apps using Jenkins, either Docker images to Kubernetes on AWS or RPMs to DC 3.0 on-premise
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
                  Developed full-stack web applications using CSS3, HTML5, and vanilla JavaScript with ASP, ASP.NET, or
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
                <ResumeKeySkillsItem>Groovy</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Java</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>JavaScript</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Python</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>TypeScript</ResumeKeySkillsItem>
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
                <ResumeKeySkillsItem>Microsoft SQL Server (T/SQL)</ResumeKeySkillsItem>
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
                <ResumeKeySkillsItem>Docker</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Git</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Kibana</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Kubernetes</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Jenkins</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Jira</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>NewRelic</ResumeKeySkillsItem>
              </ResumeKeySkills>
              <ClearFloat />
            </article>

            <article>
              <ResumeSectionContentTitle>AWS</ResumeSectionContentTitle>
              <ResumeKeySkills>
                <ResumeKeySkillsItem>CloudWatch</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>DynamoDB</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Lambda</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>RDS</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>S3</ResumeKeySkillsItem>
                <ResumeKeySkillsItem>Systems Manager</ResumeKeySkillsItem>
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
