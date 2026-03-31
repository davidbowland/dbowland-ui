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
