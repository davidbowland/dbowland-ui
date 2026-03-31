import React from 'react'

export const PrivacyLinkWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`p-2 text-center text-xs ${className ?? ''}`}>
    {children}
  </div>
)
