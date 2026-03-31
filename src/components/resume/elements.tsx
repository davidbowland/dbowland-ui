import Link from 'next/link'
import React from 'react'

export const ResumeAnchor = ({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => (
  <a {...props} className={`transition-colors duration-200 ease-in hover:text-[#cf8a05] ${className ?? ''}`}>
    {children}
  </a>
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

export const ResumeLink = ({ children, className, ...props }: React.ComponentProps<typeof Link>): React.JSX.Element => (
  <Link {...props} className={`transition-colors duration-200 ease-in hover:text-[#cf8a05] ${className ?? ''}`}>
    {children}
  </Link>
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
