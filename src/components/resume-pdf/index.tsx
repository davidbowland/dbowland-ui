import { contact, education, jobs, profile, skillGroups } from '@data/resume'
import Image from 'next-export-optimize-images/image'
import React from 'react'

import headshot from '@assets/images/David-2023-05-10.jpg'

// ─── Design tokens ────────────────────────────────────────────────────────────

const GOLD = '#cf8a05'
const GOLD_BORDER = 'rgba(207, 138, 5, 0.25)'
const GOLD_BG = '#fef9ec' // solid equivalent of gold/8 for PDF colour accuracy
const TIMELINE_LINE = 'rgba(207, 138, 5, 0.22)'
const BODY = '#1e293b'
const MUTED = '#64748b'
const NEUTRAL_BG = '#f1f5f9'
const NEUTRAL_BORDER = '#e2e8f0'
const NEUTRAL_TEXT = '#475569'
const DIVIDER = 'rgba(207, 138, 5, 0.18)'

const base: React.CSSProperties = {
  fontFamily: "'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: '11.5px',
  lineHeight: 1.45,
  color: BODY,
  background: 'white',
}

// ─── Primitives ───────────────────────────────────────────────────────────────

const Divider = () => <div style={{ borderTop: `1px solid ${DIVIDER}`, margin: '5px 0' }} />

/** Left-label / right-content row used for every section */
const Section = ({
  label,
  children,
  breakBefore = false,
}: {
  label: string
  children: React.ReactNode
  breakBefore?: boolean
}) => (
  <div
    style={{
      display: 'flex',
      gap: '14px',
      padding: '7px 0',
      breakBefore: breakBefore ? 'page' : undefined,
      pageBreakBefore: breakBefore ? 'always' : undefined,
      paddingTop: breakBefore ? '0.4in' : undefined,
    }}
  >
    <div style={{ width: '88px', flexShrink: 0, paddingTop: '1px' }}>
      <span
        style={{
          fontSize: '8px',
          fontWeight: 700,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: GOLD,
        }}
      >
        {label}
      </span>
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
)

const Chip = ({ isGold = false, label }: { isGold?: boolean; label: string }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '2px 8px',
      fontSize: '9.5px',
      fontWeight: 500,
      borderRadius: '999px',
      border: `1px solid ${isGold ? GOLD_BORDER : NEUTRAL_BORDER}`,
      background: isGold ? GOLD_BG : NEUTRAL_BG,
      color: isGold ? GOLD : NEUTRAL_TEXT,
      marginRight: '4px',
      marginBottom: '4px',
    }}
  >
    {label}
  </span>
)

const SkillGroup = ({ isGold = false, label, skills }: { isGold?: boolean; label: string; skills: string[] }) => (
  <div style={{ marginBottom: '7px' }}>
    <div
      style={{
        fontSize: '8.5px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: MUTED,
        marginBottom: '4px',
      }}
    >
      {label}
    </div>
    <div>
      {skills.map((s) => (
        <Chip isGold={isGold} key={s} label={s} />
      ))}
    </div>
  </div>
)

const TimelineDot = () => (
  <div
    style={{
      position: 'absolute',
      left: '-21px',
      top: '3px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: GOLD,
      boxShadow: '0 0 0 3px rgba(207, 138, 5, 0.12)',
    }}
  />
)

// ─── Component ────────────────────────────────────────────────────────────────

const ResumePdfContent = (): React.JSX.Element => (
  <div style={base}>
    {/* ── Header ── */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingBottom: '10px',
        borderBottom: `2px solid ${GOLD}`,
        marginBottom: '8px',
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: '30px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: BODY,
          }}
        >
          {contact.name}
        </h1>
        <p
          style={{
            margin: '5px 0 9px',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: MUTED,
          }}
        >
          {contact.title}
        </p>
        <div style={{ display: 'flex', gap: '18px', fontSize: '10px', color: MUTED }}>
          <span>
            e:{' '}
            <a href={`mailto:${contact.email}`} style={{ color: BODY, textDecoration: 'none' }}>
              {contact.email}
            </a>
          </span>
          <span>
            w:{' '}
            <a href={contact.website} style={{ color: BODY, textDecoration: 'none' }}>
              {contact.website.replace('https://', '')}
            </a>
          </span>
          <span>
            m:{' '}
            <a href={contact.phone.href} style={{ color: BODY, textDecoration: 'none' }}>
              {contact.phone.display}
            </a>
          </span>
          <span>{contact.location}</span>
        </div>
      </div>
      <Image
        alt="Picture of David Bowland"
        src={headshot}
        style={{ width: '78px', height: 'auto', borderRadius: '8px', flexShrink: 0 }}
      />
    </div>

    {/* ── Profile ── */}
    <Section label="Profile">
      <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'disc' }}>
        {profile.map((bullet) => (
          <li key={bullet} style={{ marginBottom: '2px' }}>
            {bullet}
          </li>
        ))}
      </ul>
    </Section>

    <Divider />

    {/* ── Experience ── */}
    <Section label="Experience">
      <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: `1.5px solid ${TIMELINE_LINE}` }}>
        {jobs.map((job, i) => (
          <div key={job.company} style={{ position: 'relative', marginBottom: i < jobs.length - 1 ? '10px' : 0 }}>
            <TimelineDot />
            <div
              style={{
                fontSize: '9px',
                fontFamily: 'monospace',
                color: GOLD,
                letterSpacing: '0.04em',
                marginBottom: '2px',
              }}
            >
              {job.dates}
            </div>
            <div style={{ fontSize: '12.5px', fontWeight: 600, marginBottom: '3px' }}>
              {job.title} at{' '}
              <a href={job.companyUrl} style={{ color: BODY, textDecoration: 'none' }}>
                {job.company}
              </a>
            </div>
            <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'disc' }}>
              {job.bullets.map((bullet) => (
                <li key={bullet} style={{ marginBottom: '1px' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Divider />

    {/* ── Skills — page 2 ── */}
    <Section breakBefore label="Skills">
      {skillGroups.map((group) => (
        <SkillGroup isGold={group.gold} key={group.label} label={group.label} skills={group.skills} />
      ))}
    </Section>

    <Divider />

    {/* ── Education ── */}
    <Section label="Education">
      <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: `1.5px solid ${TIMELINE_LINE}` }}>
        {education.map((edu, i) => (
          <div
            key={edu.institution}
            style={{ position: 'relative', marginBottom: i < education.length - 1 ? '10px' : 0 }}
          >
            <TimelineDot />
            <div style={{ fontSize: '12.5px', fontWeight: 600, marginBottom: '2px' }}>
              <a href={edu.url} style={{ color: BODY, textDecoration: 'none' }}>
                {edu.institution} &mdash; {edu.location}
              </a>
            </div>
            {edu.degree && (
              <div style={{ fontSize: '10.5px', fontStyle: 'italic', color: MUTED, marginBottom: '3px' }}>
                {edu.degree} &mdash; GPA {edu.gpa} &nbsp;&middot;&nbsp; {edu.major} / {edu.minor}
              </div>
            )}
            {edu.bullets && (
              <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'disc' }}>
                {edu.bullets.map((bullet) => (
                  <li key={bullet} style={{ marginBottom: '1px' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  </div>
)

export default ResumePdfContent
