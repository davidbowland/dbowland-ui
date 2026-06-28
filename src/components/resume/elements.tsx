import React from 'react'

export const ResumeAnchor = ({
  children,
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }): React.JSX.Element => (
  <a
    {...props}
    className={`text-[var(--accent)] no-underline border-b border-transparent hover:border-[var(--accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${className ?? ''}`}
    href={href}
  >
    {children}
  </a>
)

export const ResumeContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-base font-normal w-full ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeHero = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`px-6 sm:px-14 pt-16 pb-14 border-b border-[var(--rule)] ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeHeroLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col sm:flex-row items-start justify-between gap-10 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeEyebrow = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p
    {...props}
    className={`font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-whisper)] mb-5 m-0 ${className ?? ''}`}
  >
    {children}
  </p>
)

export const ResumeHeroName = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1
    {...props}
    className={`font-display text-[clamp(3.5rem,9vw,7.5rem)] font-normal tracking-[-0.02em] leading-[0.92] m-0 text-[var(--ink)] ${className ?? ''}`}
  >
    {children}
  </h1>
)

export const ResumeHeroContactInfo = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div
    {...props}
    className={`mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[14px] text-[var(--ink-soft)] ${className ?? ''}`}
  >
    {children}
  </div>
)

export const ResumeContactSeparator = (): React.JSX.Element => (
  <span className="text-[var(--ink-whisper)] select-none">/</span>
)

export const ResumeDownloadLink = ({
  children,
  className,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }): React.JSX.Element => (
  <a {...props} className={`mt-8 inline-flex items-center gap-2.5 group no-underline ${className ?? ''}`} href={href}>
    <span className="text-[13px] font-medium text-[var(--accent)] tracking-wide">{children}</span>
    <span className="w-6 h-6 rounded-full border border-[var(--rule)] flex items-center justify-center text-[var(--ink-whisper)] group-hover:border-[var(--accent-warm)] group-hover:text-[var(--accent-warm)] group-hover:translate-x-0.5 transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] flex-shrink-0 select-none">
      <svg
        aria-hidden="true"
        fill="none"
        height="10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 10 10"
        width="10"
      >
        <path d="M2 5h6M5.5 2.5 8 5l-2.5 2.5" />
      </svg>
    </span>
  </a>
)

export const ResumeJobDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`m-0 mt-3 p-0 list-none space-y-2 ${className ?? ''}`}>
    {children}
  </ul>
)

export const ResumeJobDescriptionDetail = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>): React.JSX.Element => (
  <li
    {...props}
    className={`flex items-start gap-2.5 text-[14px] text-[var(--ink-soft)] leading-relaxed ${className ?? ''}`}
  >
    <span className="text-[var(--ink-whisper)] mt-0.5 flex-shrink-0 select-none">–</span>
    <span>{children}</span>
  </li>
)

export const ResumeSectionContentTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h3 {...props} className={`text-[16px] font-semibold m-0 text-[var(--ink)] leading-snug ${className ?? ''}`}>
    {children}
  </h3>
)

export const ResumeSectionTitleHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h2
    {...props}
    className={`font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-whisper)] m-0 ${className ?? ''}`}
  >
    {children}
  </h2>
)

export const ResultSubDetails = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-[14px] text-[var(--ink-soft)] my-1 m-0 ${className ?? ''}`}>
    {children}
  </p>
)

export const ResumeSections = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col px-6 sm:px-14 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionRow = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-10 py-10 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionLabel = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mb-4 sm:mb-0 pt-0.5 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeSectionContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`min-w-0 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeDivider = (): React.JSX.Element => <div className="h-px bg-[var(--rule)]" />

export const ResumeTimeline = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col gap-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeEducationTimeline = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col gap-6 ${className ?? ''}`}>
    {children}
  </div>
)

export const ResumeJobDates = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element => (
  <span
    {...props}
    className={`font-mono text-[11px] text-[var(--ink-whisper)] uppercase tracking-wider mb-2 block ${className ?? ''}`}
  >
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
    className={`font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-whisper)] mb-0 m-0 ${className ?? ''}`}
  >
    {children}
  </p>
)
