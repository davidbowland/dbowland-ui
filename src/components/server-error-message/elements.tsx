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

export const ErrorPageContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col gap-4 p-8 w-full max-w-[900px] ${className ?? ''}`}>
    {children}
  </div>
)

export const ErrorPageTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1 {...props} className={`text-5xl font-light ${className ?? ''}`}>
    {children}
  </h1>
)
