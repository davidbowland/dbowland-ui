import React from 'react'

export const ErrorPageLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex justify-center ${className ?? ''}`}>
    {children}
  </div>
)

export const ErrorPageContent = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <div className="w-full max-w-[900px] m-8 bg-[var(--surface)] border border-[var(--rule)] rounded-2xl flex flex-col gap-4 p-8">
    {children}
  </div>
)

export const ErrorPageTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1 {...props} className={`text-5xl font-light text-[var(--ink)] ${className ?? ''}`}>
    {children}
  </h1>
)
