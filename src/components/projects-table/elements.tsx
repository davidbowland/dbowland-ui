import { Button, Card, CardContent, CardHeader, Link } from '@heroui/react'
import React from 'react'

export const ProjectCard = ({
  cardRef,
  children,
  title,
}: {
  cardRef?: React.RefObject<HTMLDivElement | null>
  children: React.JSX.Element | React.JSX.Element[]
  title: string
}): React.JSX.Element => (
  <div ref={cardRef}>
    <Card>
      <CardHeader className="border-b border-[#cf8a05]/20 pb-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#cf8a05] m-0">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">{children}</CardContent>
    </Card>
  </div>
)

export const ProjectNavButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode
  onPress: () => void
}): React.JSX.Element => (
  <Button className="w-full justify-start font-normal" onPress={onPress} variant="ghost">
    {children}
  </Button>
)

export const ProjectSectionHeading = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mt-2 mb-0">
    {children}
  </p>
)

export const ProjectSourceLink = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}): React.JSX.Element => (
  <Link className="text-sm" href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </Link>
)

export const ProjectsLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-col gap-4 py-2 ${className ?? ''}`}>
    {children}
  </div>
)

export const ProjectDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-sm leading-relaxed ${className ?? ''}`}>
    {children}
  </p>
)

export const ProjectUrl = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-sm ${className ?? ''}`}>
    {children}
  </p>
)

export const ProjectNavList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`list-none p-0 m-0 flex flex-col ${className ?? ''}`}>
    {children}
  </ul>
)

export const ProjectSourceList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`list-none p-0 m-0 ${className ?? ''}`}>
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
  <Button
    aria-label="Scroll to top"
    className="fixed bottom-4 right-4 rounded-full"
    isIconOnly
    onPress={onPress}
    variant="primary"
  >
    {children}
  </Button>
)
