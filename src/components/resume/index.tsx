import { contact, education, jobs, profile, skillGroups } from '@data/resume'
import { motion } from 'framer-motion'
import Image from 'next-export-optimize-images/image'
import React from 'react'

import {
  ResumeAnchor,
  ResumeContainer,
  ResumeContactSeparator,
  ResumeDivider,
  ResumeDownloadLink,
  ResumeEducationTimeline,
  ResumeEyebrow,
  ResumeHero,
  ResumeHeroContactInfo,
  ResumeHeroLayout,
  ResumeHeroName,
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
  ResultSubDetails,
} from './elements'
import headshot from '@assets/images/David-2023-05-10.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
  },
}

const SkillGroup = ({ gold = false, label, skills }: { gold?: boolean; label: string; skills: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-x-8 gap-y-0.5 mb-3 items-baseline">
    <ResumeSkillGroupLabel>{label}</ResumeSkillGroupLabel>
    <span className={`text-[13px] leading-relaxed ${gold ? 'text-[var(--accent)]' : 'text-[var(--ink-soft)]'}`}>
      {skills.join(' · ')}
    </span>
  </div>
)

const ResumeSection = ({
  children,
  title,
}: {
  children: React.JSX.Element | React.JSX.Element[]
  title: string
}): React.JSX.Element => (
  <motion.div initial="hidden" variants={fadeUp} viewport={{ once: true, margin: '-60px' }} whileInView="visible">
    <ResumeSectionRow>
      <ResumeSectionLabel>
        <ResumeSectionTitleHeader>{title}</ResumeSectionTitleHeader>
      </ResumeSectionLabel>
      <ResumeSectionContent>{children}</ResumeSectionContent>
    </ResumeSectionRow>
  </motion.div>
)

const Resume = (): React.JSX.Element => {
  const resumePdf = `/assets/pdf/david-bowland-resume-v${process.env.NEXT_PUBLIC_APP_VERSION}.pdf`
  return (
    <ResumeContainer>
      {/* HERO */}
      <ResumeHero>
        <ResumeHeroLayout>
          <div>
            <ResumeEyebrow>{contact.title}</ResumeEyebrow>
            <ResumeHeroName>{contact.name}</ResumeHeroName>
            <ResumeHeroContactInfo>
              <ResumeAnchor href={`mailto:${contact.email}`}>{contact.email}</ResumeAnchor>
              <ResumeContactSeparator />
              <ResumeAnchor href={contact.website}>{contact.website.replace('https://', '')}</ResumeAnchor>
              <ResumeContactSeparator />
              <ResumeAnchor href={contact.phone.href}>{contact.phone.display}</ResumeAnchor>
              <ResumeContactSeparator />
              <span className="text-[var(--ink-whisper)]">{contact.location}</span>
            </ResumeHeroContactInfo>
            <ResumeDownloadLink href={resumePdf}>Download Resume</ResumeDownloadLink>
          </div>
          {/* Headshot */}
          <div className="flex-shrink-0">
            <Image
              alt="Picture of David Bowland"
              src={headshot}
              style={{
                borderRadius: '1rem',
                border: '1px solid var(--rule)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                height: 'auto',
                width: '160px',
                display: 'block',
              }}
            />
          </div>
        </ResumeHeroLayout>
      </ResumeHero>

      {/* SECTIONS */}
      <ResumeSections>
        {/* Profile */}
        <ResumeSection title="Profile">
          <div className="flex flex-col gap-4">
            {profile.map((bullet) => (
              <p
                className="text-[15px] text-[var(--ink-soft)] leading-[1.7] m-0 border-l-2 border-[var(--accent)] pl-4"
                key={bullet}
              >
                {bullet}
              </p>
            ))}
          </div>
        </ResumeSection>
        <ResumeDivider />

        {/* Experience */}
        <ResumeSection title="Experience">
          <ResumeTimeline>
            {jobs.map((job, i) => (
              <div key={job.company}>
                <ResumeJobDates>{job.dates}</ResumeJobDates>
                <ResumeSectionContentTitle>
                  {job.title} <span className="text-[var(--ink-whisper)] font-normal">—</span>{' '}
                  <ResumeAnchor href={job.companyUrl} rel="noopener noreferrer" target="_blank">
                    {job.company}
                  </ResumeAnchor>
                </ResumeSectionContentTitle>
                {job.progression && (
                  <p className="font-mono text-[10px] text-[var(--ink-whisper)] tracking-wider mt-1 mb-0">
                    {job.progression.join('  ·  ')}
                  </p>
                )}
                <ResumeJobDescription>
                  {job.bullets.map((bullet) => (
                    <ResumeJobDescriptionDetail key={bullet}>{bullet}</ResumeJobDescriptionDetail>
                  ))}
                </ResumeJobDescription>
                {i < jobs.length - 1 && <div className="h-px bg-[var(--rule)] mt-8" />}
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
                <ResumeSectionContentTitle>
                  <ResumeAnchor href={edu.url} rel="noopener noreferrer" target="_blank">
                    {edu.institution}
                  </ResumeAnchor>
                  <span className="text-[var(--ink-whisper)] font-normal text-[14px] ml-2">— {edu.location}</span>
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
