import { contact, education, jobs, profile, skillGroups } from '@data/resume'
import Image from 'next-export-optimize-images/image'
import React from 'react'

import {
  ResumeAnchor,
  ResumeChipGold,
  ResumeChipNeutral,
  ResumeContainer,
  ResumeDivider,
  ResumeDownloadLink,
  ResumeEducationTimeline,
  ResumeHero,
  ResumeHeroContactInfo,
  ResumeHeroLayout,
  ResumeHeroName,
  ResumeHeroTitle,
  ResumeJobDates,
  ResumeJobDescription,
  ResumeJobDescriptionDetail,
  ResumeSectionContent,
  ResumeSectionContentTitle,
  ResumeSectionLabel,
  ResumeSectionRow,
  ResumeSections,
  ResumeSectionTitleHeader,
  ResumeSkillGroupLabel,
  ResumeTimeline,
  ResumeTimelineDot,
  ResultSubDetails,
} from './elements'
import headshot from '@assets/images/David-2023-05-10.jpg'

const resumePdf = '/assets/pdf/david-bowland-resume.pdf'

const SkillGroup = ({ gold = false, label, skills }: { gold?: boolean; label: string; skills: string[] }) => (
  <div>
    <ResumeSkillGroupLabel>{label}</ResumeSkillGroupLabel>
    <div>
      {skills.map((skill) =>
        gold ? (
          <ResumeChipGold key={skill}>{skill}</ResumeChipGold>
        ) : (
          <ResumeChipNeutral key={skill}>{skill}</ResumeChipNeutral>
        ),
      )}
    </div>
  </div>
)

const ResumeSection = ({
  children,
  title,
}: {
  children: React.JSX.Element | React.JSX.Element[]
  title: string
}): React.JSX.Element => (
  <ResumeSectionRow>
    <ResumeSectionLabel>
      <ResumeSectionTitleHeader>{title}</ResumeSectionTitleHeader>
    </ResumeSectionLabel>
    <ResumeSectionContent>{children}</ResumeSectionContent>
  </ResumeSectionRow>
)

const Resume = (): React.JSX.Element => {
  return (
    <ResumeContainer>
      {/* HERO */}
      <ResumeHero>
        <ResumeHeroLayout>
          <div>
            <ResumeHeroName>{contact.name}</ResumeHeroName>
            <ResumeHeroTitle>{contact.title}</ResumeHeroTitle>
            <ResumeHeroContactInfo>
              <span>
                e: <ResumeAnchor href={`mailto:${contact.email}`}>{contact.email}</ResumeAnchor>
              </span>
              <span>
                w: <ResumeAnchor href={contact.website}>{contact.website.replace('https://', '')}</ResumeAnchor>
              </span>
              <span>
                m: <ResumeAnchor href={contact.phone.href}>{contact.phone.display}</ResumeAnchor>
              </span>
            </ResumeHeroContactInfo>
            <ResumeDownloadLink href={resumePdf}>↓ Download Resume</ResumeDownloadLink>
          </div>
          <div>
            <Image
              alt="Picture of David Bowland"
              src={headshot}
              style={{ borderRadius: '12px', height: 'auto', width: '150px' }}
            />
          </div>
        </ResumeHeroLayout>
      </ResumeHero>

      {/* SECTIONS */}
      <ResumeSections>
        <ResumeSection title="Personal Profile">
          <ResumeJobDescription>
            {profile.map((bullet) => (
              <ResumeJobDescriptionDetail key={bullet}>{bullet}</ResumeJobDescriptionDetail>
            ))}
          </ResumeJobDescription>
        </ResumeSection>
        <ResumeDivider />

        {/* Experience */}
        <ResumeSection title="Experience">
          <ResumeTimeline>
            {jobs.map((job) => (
              <div key={job.company}>
                <ResumeTimelineDot />
                <ResumeJobDates>{job.dates}</ResumeJobDates>
                <ResumeSectionContentTitle>
                  {job.title} at{' '}
                  <ResumeAnchor href={job.companyUrl} rel="noopener noreferrer">
                    {job.company}
                  </ResumeAnchor>
                </ResumeSectionContentTitle>
                <ResumeJobDescription>
                  {job.bullets.map((bullet) => (
                    <ResumeJobDescriptionDetail key={bullet}>{bullet}</ResumeJobDescriptionDetail>
                  ))}
                </ResumeJobDescription>
              </div>
            ))}
          </ResumeTimeline>
        </ResumeSection>
        <ResumeDivider />

        {/* Skills */}
        <ResumeSection title="Skills">
          <div>
            {skillGroups.map((group) => (
              <SkillGroup gold={group.gold} key={group.label} label={group.label} skills={group.skills} />
            ))}
          </div>
        </ResumeSection>
        <ResumeDivider />

        {/* Education */}
        <ResumeSection title="Education">
          <ResumeEducationTimeline>
            {education.map((edu) => (
              <div key={edu.institution}>
                <ResumeTimelineDot />
                <ResumeSectionContentTitle>
                  <ResumeAnchor href={edu.url} rel="noopener noreferrer">
                    {edu.institution} &mdash; {edu.location}
                  </ResumeAnchor>
                </ResumeSectionContentTitle>
                {edu.degree && (
                  <ResultSubDetails>
                    {edu.degree} &mdash; GPA&nbsp;{edu.gpa}
                  </ResultSubDetails>
                )}
                {edu.major && (
                  <ResultSubDetails>
                    Major:&nbsp;{edu.major} &mdash; Minor:&nbsp;{edu.minor}
                  </ResultSubDetails>
                )}
                {edu.bullets && (
                  <ResumeJobDescription>
                    {edu.bullets.map((bullet) => (
                      <ResumeJobDescriptionDetail key={bullet}>{bullet}</ResumeJobDescriptionDetail>
                    ))}
                  </ResumeJobDescription>
                )}
              </div>
            ))}
          </ResumeEducationTimeline>
        </ResumeSection>
      </ResumeSections>
    </ResumeContainer>
  )
}

export default Resume
