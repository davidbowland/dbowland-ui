import React from 'react'

export const PolicyLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col gap-4 p-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const PolicyTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h4 {...props} className={`text-3xl font-normal ${className ?? ''}`}>
    {children}
  </h4>
)

export const PolicySectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl font-medium ${className ?? ''}`}>
    {children}
  </h6>
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
