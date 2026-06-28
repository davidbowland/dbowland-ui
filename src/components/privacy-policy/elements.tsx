import React from 'react'

export const PolicyLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col p-8 text-[var(--ink-soft)] ${className ?? ''}`}>
    {children}
  </div>
)

export const PolicyEyebrow = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p
    {...props}
    className={`text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3 ${className ?? ''}`}
  >
    {children}
  </p>
)

export const PolicyTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1 {...props} className={`text-4xl font-normal text-[var(--ink)] mb-4 ${className ?? ''}`}>
    {children}
  </h1>
)

export const PolicySection = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`py-6 border-t border-[var(--rule)] ${className ?? ''}`}>
    {children}
  </div>
)

export const PolicySectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h2
    {...props}
    className={`text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3 ${className ?? ''}`}
  >
    {children}
  </h2>
)

export const PolicyList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`list-disc pl-6 mt-2 ${className ?? ''}`}>
    {children}
  </ul>
)
