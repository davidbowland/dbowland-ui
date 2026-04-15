import { Card, CardContent } from '@heroui/react'
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
  <Card className="w-full max-w-[900px] m-8">
    <CardContent className="flex flex-col gap-4 p-8">{children}</CardContent>
  </Card>
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
