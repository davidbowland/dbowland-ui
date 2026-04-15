import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Card,
  CardContent,
  Chip,
  Link,
  type LinkRootProps,
  Separator,
} from '@heroui/react'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export const MarriagePageLayout = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`p-6 ${className ?? ''}`}>
    {children}
  </div>
)

export const MarriageHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-center mb-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const MarriageTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h1 {...props} className={`text-5xl font-normal mb-2 ${className ?? ''}`}>
    {children}
  </h1>
)

export const MarriageSubtitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h5 {...props} className={`text-2xl text-default-500 mb-2 ${className ?? ''}`}>
    {children}
  </h5>
)

export const MarriageDate = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl text-primary ${className ?? ''}`}>
    {children}
  </h6>
)

export const MarriageSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element => (
  // eslint-disable-next-line react/prop-types
  <Separator className={`mb-8 ${className ?? ''}`} {...props} />
)

export const StatsGrid = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const StatCardWrapper = ({ title, value }: { title: string; value: number }): React.JSX.Element => (
  <Card>
    <CardContent>
      <div>
        <StatValue>{value.toLocaleString()}</StatValue>
        <StatLabel>{title}</StatLabel>
      </div>
    </CardContent>
  </Card>
)

const StatValue = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-4xl font-normal text-primary mb-1 text-center ${className ?? ''}`}>
    {children}
  </div>
)

const StatLabel = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-xl font-medium text-center ${className ?? ''}`}>
    {children}
  </div>
)

export const MilestoneContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mb-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const MilestoneHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h2 {...props} className={`text-2xl text-center mb-6 ${className ?? ''}`}>
    {children}
  </h2>
)

export const AchievedCard = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <Card className={`bg-success-100 dark:bg-success-700 mb-6 ${className ?? ''}`} {...props}>
    <CardContent>
      <AchievedHeading>Achieved 🎉</AchievedHeading>
      <ChipRow>{children}</ChipRow>
    </CardContent>
  </Card>
)

const AchievedHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl font-medium text-center mb-3 ${className ?? ''}`}>
    {children}
  </h6>
)

const ChipRow = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`flex flex-wrap gap-2 justify-center ${className ?? ''}`}>
    {children}
  </div>
)

export const AchievedChip = ({ name, emoji }: { name: string; emoji: string }): React.JSX.Element => (
  <Chip color="success" size="lg" variant="primary">
    {emoji} {name}
  </Chip>
)

export const NextMilestoneCard = ({
  emoji,
  name,
  remainingText,
}: {
  emoji: string
  name: string
  remainingText: string
}): React.JSX.Element => (
  <Card className="bg-primary mb-4">
    <CardContent>
      <NextMilestoneHeading>Next Milestone</NextMilestoneHeading>
      <NextMilestoneValue>
        {emoji} {name}
      </NextMilestoneValue>
      <p className="text-center">{remainingText} to go!</p>
    </CardContent>
  </Card>
)

const NextMilestoneHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl font-medium mb-2 text-center ${className ?? ''}`}>
    {children}
  </h6>
)

const NextMilestoneValue = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`text-2xl mb-2 text-center ${className ?? ''}`}>
    {children}
  </div>
)

export const UpcomingCard = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <Card className="bg-default-300 dark:bg-default-600 mb-4">
    <CardContent>
      <UpcomingHeading>Coming Up</UpcomingHeading>
      <ChipRow>{children}</ChipRow>
    </CardContent>
  </Card>
)

const UpcomingHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl font-medium text-center mb-3 ${className ?? ''}`}>
    {children}
  </h6>
)

export const UpcomingChip = ({ name, emoji }: { name: string; emoji: string }): React.JSX.Element => (
  <Chip size="lg" variant="secondary">
    {emoji} {name}
  </Chip>
)

export const VideoCardWrapper = ({ title, videoId }: { title: string; videoId: string }): React.JSX.Element => {
  const driveUrl = `https://drive.google.com/file/d/${videoId}/view?usp=sharing`

  return (
    <Card>
      <CardContent>
        <VideoTitle>{title}</VideoTitle>
        <VideoEmbedDesktop>
          <VideoIframeContainer>
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              title={title}
            />
          </VideoIframeContainer>
        </VideoEmbedDesktop>
        <div>
          <VideoLink href={driveUrl} rel="noopener noreferrer" target="_blank">
            Open in Google Drive
          </VideoLink>
        </div>
      </CardContent>
    </Card>
  )
}

const VideoTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h3 {...props} className={`text-xl font-medium mb-2 ${className ?? ''}`}>
    {children}
  </h3>
)

const VideoEmbedDesktop = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`hidden md:block ${className ?? ''}`}>
    {children}
  </div>
)

const VideoIframeContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`relative pb-[56.25%] h-0 overflow-hidden mb-4 ${className ?? ''}`}>
    {children}
  </div>
)

const VideoLink = ({ children, className, ...props }: LinkRootProps): React.JSX.Element => (
  <Link {...props} className={`text-sm ${className ?? ''}`}>
    {children}
  </Link>
)

export const RecipeAccordionWrapper = (): React.JSX.Element => (
  <div className="bg-red-900 rounded-xl">
    <Accordion className="bg-transparent">
      <AccordionItem>
        <AccordionHeading>
          <AccordionTrigger>
            <ChevronDown />
            <RecipeTriggerText>Our Perfect Recipe For Love 👨‍🍳👩‍🍳</RecipeTriggerText>
          </AccordionTrigger>
        </AccordionHeading>
        <AccordionPanel>
          <AccordionBody className="bg-transparent text-white">
            <RecipeSection>
              <RecipeSectionTitle>Ingredients:</RecipeSectionTitle>
              <RecipeList>
                <li>1 lonely man</li>
                <li>1 lonely woman</li>
                <li>1 adorable chiweenie (for binding)</li>
                <li>2 separate households (to be combined)</li>
                <li>313 collaborative cooking sessions</li>
                <li>1 collection of magical memories (Vegas and Chicago varieties)</li>
                <li>Multiple St. Louis day-trip seasonings</li>
                <li>730 days of careful preparation time</li>
                <li>2 festive holiday celebrations</li>
                <li>A generous helping of commitment and love</li>
              </RecipeList>
            </RecipeSection>
            <div>
              <RecipeSectionTitle>Instructions:</RecipeSectionTitle>
              <RecipeParagraph>
                Start by introducing your lonely man and lonely woman in a cozy restaurant setting, allowing them to
                blend naturally. Add the adorable chiweenie as a binding agent - this will help hold everything together
                beautifully.
              </RecipeParagraph>
              <RecipeParagraph>
                Slowly incorporate 313 collaborative cooking sessions, stirring frequently to build teamwork and shared
                tastes. Season the mixture with magical memories from Vegas and Chicago, plus regular applications of
                St. Louis day-trip flavoring for local charm.
              </RecipeParagraph>
              <RecipeParagraph>
                Carefully fold in 2 separate households, combining gradually to avoid lumps. This process requires
                patience and lots of love. Allow the entire mixture to develop over exactly 730 days, celebrating
                progress with festive holiday gatherings.
              </RecipeParagraph>
              <RecipeLastParagraph>
                The final result should be perfectly seasoned, well-combined, and ready to serve a lifetime of
                happiness!
              </RecipeLastParagraph>
            </div>
          </AccordionBody>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
)

const RecipeTriggerText = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element => (
  <span {...props} className={`text-xl font-medium ${className ?? ''}`}>
    {children}
  </span>
)

const RecipeSection = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mb-6 ${className ?? ''}`}>
    {children}
  </div>
)

const RecipeSectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h6 {...props} className={`text-xl font-medium mb-2 ${className ?? ''}`}>
    {children}
  </h6>
)

const RecipeList = ({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>): React.JSX.Element => (
  <ul {...props} className={`list-disc pl-6 mb-4 text-sm ${className ?? ''}`}>
    {children}
  </ul>
)

const RecipeParagraph = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-sm mb-3 ${className ?? ''}`}>
    {children}
  </p>
)

const RecipeLastParagraph = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element => (
  <p {...props} className={`text-sm ${className ?? ''}`}>
    {children}
  </p>
)

export const StorySection = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`mb-8 ${className ?? ''}`}>
    {children}
  </div>
)

export const StorySectionTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element => (
  <h2 {...props} className={`text-2xl mb-4 ${className ?? ''}`}>
    {children}
  </h2>
)

export const VideoGrid = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className ?? ''}`}>
    {children}
  </div>
)
