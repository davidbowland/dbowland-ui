import { Button, Chip, Link as HeroLink, type LinkRootProps, Separator } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export const ResumeAnchor = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <HeroLink {...props} className={`transition-colors duration-200 ease-in hover:text-[#cf8a05] ${className ?? ''}`}>
    {children}
  </HeroLink>
)

export const ResumeContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-base font-normal w-full print:w-full ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeHero = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`px-6 sm:px-10 py-10 sm:py-14 border-b-2 border-[#cf8a05] ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeHeroLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col sm:flex-row items-start justify-between gap-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeHeroName = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1
    {...props}
    className={`text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-tighter leading-[0.9] m-0 ${className ?? ''}`}
  >
    {children}
  </h1>
)

export const ResumeHeroTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p
    {...props}
    className={`mt-3 text-sm font-semibold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 m-0 ${className ?? ''}`}
  >
    {children}
  </p>
)

export const ResumeHeroContactInfo = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div
    {...props}
    className={`mt-5 flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-400 ${className ?? ''}`}
  >
    {children}
  </div>
)

export const ResumeDownloadLink = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>): React.JSX.Element => (
  <Link {...props} className="mt-5 inline-flex">
    <Button className={`text-sm font-medium text-[#cf8a05] hover:text-[#e0a020] ${className ?? ''}`} variant="ghost">
      {children}
    </Button>
  </Link>
)

export const ResumeJobDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`m-0 p-0 list-disc pl-5 ${className ?? ''}`}>
    {children}
  </ul>
)

export const ResumeJobDescriptionDetail = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>): React.JSX.Element => (
  <li {...props} className={`my-[2px] ${className ?? ''}`}>
    {children}
  </li>
)

const ResumeParagraph = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-base leading-[1.4em] mb-[10px] ${className ?? ''}`}>
    {children}
  </p>
)

export const ResumeSectionContentTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h2 {...props} className={`text-[1.3em] font-semibold m-0 mb-[4px] ${className ?? ''}`}>
    {children}
  </h2>
)

export const ResumeSectionTitleHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1
    {...props}
    className={`text-[#cf8a05] text-[0.85em] font-semibold uppercase tracking-[0.14em] m-0 mx-[0.5em] mt-2 ${className ?? ''}`}
  >
    {children}
  </h1>
)

export const ResultSubDetails = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <ResumeParagraph {...props} className={`text-[0.9em] italic my-[1em] ${className ?? ''}`}>
    {children}
  </ResumeParagraph>
)

export const ResumeSections = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col px-2 sm:px-4 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionRow = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`grid grid-cols-12 py-[0.5em] ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionLabel = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`col-span-12 sm:col-span-3 p-[0.5em] ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`col-span-12 sm:col-span-9 p-[1em] ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeDivider = (): React.JSX.Element => <Separator className="border-[#cf8a05]/20" />

export const ResumeTimeline = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`relative border-l-2 border-[#cf8a05]/20 pl-6 flex flex-col gap-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeEducationTimeline = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`relative border-l-2 border-[#cf8a05]/20 pl-6 flex flex-col gap-6 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeTimelineDot = (): React.JSX.Element => (
  <div
    className="absolute w-2.5 h-2.5 rounded-full bg-[#cf8a05] ring-2 ring-[#cf8a05]/15 top-1.5 z-10"
    style={{ left: '-1.875rem' }}
  />
)

export const ResumeJobDates = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element => (
  <span {...props} className={`text-xs font-mono text-[#cf8a05] tracking-wide ${className ?? ''}`}>
    {children}
  </span>
)

export const ResumeSkillGroupLabel = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p
    {...props}
    className={`text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-2 m-0 ${className ?? ''}`}
  >
    {children}
  </p>
)

export const ResumeChipGold = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <Chip className="bg-[#cf8a05]/10 text-[#cf8a05] border-[#cf8a05]/25" variant="secondary">
    {children}
  </Chip>
)

export const ResumeChipNeutral = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <Chip variant="secondary">{children}</Chip>
)
