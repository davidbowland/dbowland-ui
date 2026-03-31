import { contact, education, jobs, profile, skillGroups } from '@data/resume'
import Image from 'next-export-optimize-images/image'
import React from 'react'

import {
  ResumeAnchor,
  ResumeContainer,
  ResumeJobDescription,
  ResumeJobDescriptionDetail,
  ResumeLink,
  ResumeSectionContentTitle,
  ResumeSectionTitleHeader,
  ResultSubDetails,
} from './elements'
import headshot from '@assets/images/David-2023-05-10.jpg'

const resumePdf = '/assets/pdf/david-bowland-resume.pdf'

const chipGold =
  'px-2.5 py-0.5 text-sm rounded-full bg-[#cf8a05]/10 text-[#cf8a05] border border-[#cf8a05]/25 font-medium'
const chipNeutral =
  'px-2.5 py-0.5 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium'

const SkillGroup = ({ gold = false, label, skills }: { gold?: boolean; label: string; skills: string[] }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-2 m-0">
      {label}
    </p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span className={gold ? chipGold : chipNeutral} key={skill}>
          {skill}
        </span>
      ))}
    </div>
  </div>
)

const TimelineDot = () => (
  <div
    className="absolute w-2.5 h-2.5 rounded-full bg-[#cf8a05] ring-2 ring-[#cf8a05]/15 top-1.5 z-10"
    style={{ left: '-1.875rem' }}
  />
)

const ResumeSection = ({
  children,
  title,
}: {
  children: React.JSX.Element | React.JSX.Element[]
  title: string
}): React.JSX.Element => (
  <div className="grid grid-cols-12 py-[0.5em]">
    <div className="col-span-12 sm:col-span-3 p-[0.5em]">
      <ResumeSectionTitleHeader>{title}</ResumeSectionTitleHeader>
    </div>
    <div className="col-span-12 sm:col-span-9 p-[1em]">{children}</div>
  </div>
)

const Resume = (): React.JSX.Element => {
  return (
    <ResumeContainer>
      {/* HERO */}
      <div className="px-6 sm:px-10 py-10 sm:py-14 border-b-2 border-[#cf8a05]">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-tighter leading-[0.9] m-0">
              {contact.name}
            </h1>
            <p className="mt-3 text-sm font-semibold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 m-0">
              {contact.title}
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-400">
              <span>
                e: <ResumeAnchor href={`mailto:${contact.email}`}>{contact.email}</ResumeAnchor>
              </span>
              <span>
                w: <ResumeAnchor href={contact.website}>{contact.website.replace('https://', '')}</ResumeAnchor>
              </span>
              <span>
                m: <ResumeAnchor href={contact.phone.href}>{contact.phone.display}</ResumeAnchor>
              </span>
            </div>
            <ResumeLink
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#cf8a05] hover:text-[#e0a020] transition-colors"
              href={resumePdf}
            >
              ↓ Download Resume
            </ResumeLink>
          </div>
          <div className="shrink-0 print:hidden">
            <Image
              alt="Picture of David Bowland"
              src={headshot}
              style={{ borderRadius: '12px', height: 'auto', width: '150px' }}
            />
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="flex flex-col px-2 sm:px-4">
        <ResumeSection title="Personal Profile">
          <ResumeJobDescription>
            {profile.map((bullet) => (
              <ResumeJobDescriptionDetail key={bullet}>{bullet}</ResumeJobDescriptionDetail>
            ))}
          </ResumeJobDescription>
        </ResumeSection>
        <hr className="border-t border-[#cf8a05]/20" />

        {/* Experience */}
        <ResumeSection title="Experience">
          <div className="relative border-l-2 border-[#cf8a05]/20 pl-6 flex flex-col gap-8">
            {jobs.map((job) => (
              <div className="relative" key={job.company}>
                <TimelineDot />
                <span className="text-xs font-mono text-[#cf8a05] tracking-wide">{job.dates}</span>
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
          </div>
        </ResumeSection>
        <hr className="border-t border-[#cf8a05]/20" />

        {/* Skills */}
        <ResumeSection title="Skills">
          <div className="flex flex-col gap-5">
            {skillGroups.map((group) => (
              <SkillGroup gold={group.gold} key={group.label} label={group.label} skills={group.skills} />
            ))}
          </div>
        </ResumeSection>
        <hr className="border-t border-[#cf8a05]/20" />

        {/* Education */}
        <ResumeSection title="Education">
          <div className="relative border-l-2 border-[#cf8a05]/20 pl-6 flex flex-col gap-6">
            {education.map((edu) => (
              <div className="relative" key={edu.institution}>
                <TimelineDot />
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
          </div>
        </ResumeSection>
      </div>
    </ResumeContainer>
  )
}

export default Resume
