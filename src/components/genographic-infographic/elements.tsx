import React from 'react'

export const GenographicLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mx-auto flex flex-col items-center gap-4 p-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const GenographicCaption = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-sm italic ${className ?? ''}`}>
    {children}
  </p>
)
