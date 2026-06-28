import React from 'react'

export const ProjectCard = ({
  cardRef,
  children,
  className,
  title,
}: {
  cardRef?: React.RefObject<HTMLDivElement | null>
  children: React.JSX.Element | React.JSX.Element[]
  className?: string
  title: string
}): React.JSX.Element => (
  <div
    className={`bg-[var(--surface)] border border-[var(--rule)] rounded-3xl p-1.5 h-full ${className ?? ''}`}
    ref={cardRef}
  >
    <div className="bg-[var(--bg)] rounded-[calc(1.5rem-0.375rem)] h-full flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div className="px-7 pt-7 pb-4">
        <h2 className="font-display text-[28px] font-normal text-[var(--ink)] tracking-[-0.01em] m-0 leading-tight">
          {title}
        </h2>
        <div className="mt-4 h-px bg-[var(--rule)]" />
      </div>
      <div className="px-7 pb-7 flex flex-col gap-1 flex-1">{children}</div>
    </div>
  </div>
)

export const ProjectNavButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode
  onPress: () => void
}): React.JSX.Element => (
  <button
    className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-whisper)] hover:text-[var(--accent)] transition-colors duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] bg-transparent border-0 cursor-pointer p-0 text-left w-full py-1"
    onClick={onPress}
    type="button"
  >
    {children}
  </button>
)

export const ProjectSectionHeading = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-whisper)] mt-5 mb-2 m-0">{children}</p>
)

export const ProjectSourceLink = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}): React.JSX.Element => (
  <a
    className="inline-flex items-center gap-2 text-[13px] text-[var(--accent)] no-underline hover:border-b hover:border-[var(--accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span className="text-[var(--ink-whisper)] flex-shrink-0 select-none">→</span>
    <span>{children}</span>
  </a>
)

export const ProjectsLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`grid grid-cols-12 gap-4 ${className ?? ''}`}>
    {children}
  </div>
)

export const ProjectDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-[14px] leading-[1.7] text-[var(--ink-soft)] m-0 ${className ?? ''}`}>
    {children}
  </p>
)

export const ProjectUrl = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`font-mono text-[11px] text-[var(--accent)] tracking-wide m-0 mb-1 ${className ?? ''}`}>
    {children}
  </p>
)

export const ProjectSourceList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`list-none p-0 m-0 flex flex-col gap-3 ${className ?? ''}`}>
    {children}
  </ul>
)

export const ScrollToTopButton = ({
  onPress,
  children,
}: {
  onPress: () => void
  children: React.ReactNode
}): React.JSX.Element => (
  <button
    aria-label="Scroll to top"
    className="fixed bottom-6 right-6 rounded-full bg-[var(--bg)] border border-[var(--rule)] text-[var(--ink-whisper)] hover:text-[var(--accent-warm)] hover:border-[var(--accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] w-10 h-10 flex items-center justify-center cursor-pointer"
    onClick={onPress}
    type="button"
  >
    {children}
  </button>
)
