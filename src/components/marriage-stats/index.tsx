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
  Separator,
} from '@heroui/react'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'

const MARRIAGE_DATE = '2025-09-20T17:00:00-05:00'
const PROPOSAL_VIDEO_ID = '1QjF6bZjeD2k4OKReS_Okm7xX0W_l9n52'
const WEDDING_VIDEO_ID = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'

interface Milestone {
  name: string
  target: number
  type: 'years' | 'days' | 'hours' | 'minutes'
  emoji: string
}

interface ProcessedMilestone extends Milestone {
  achieved: boolean
  targetDate: Date
  remainingText: string
}

const MILESTONES: Milestone[] = [
  { name: '1 Month', target: 30, type: 'days', emoji: '🌙' },
  { name: '3 Months', target: 91, type: 'days', emoji: '🌱' },
  { name: '6 Months', target: 183, type: 'days', emoji: '🌸' },
  { name: '1 Year', target: 1, type: 'years', emoji: '🎂' },
  { name: '2 Years', target: 2, type: 'years', emoji: '💕' },
  { name: '3 Years', target: 3, type: 'years', emoji: '💖' },
  { name: '5 Years', target: 5, type: 'years', emoji: '💎' },
  { name: '10 Years', target: 10, type: 'years', emoji: '👑' },
  { name: '15 Years', target: 15, type: 'years', emoji: '🥂' },
  { name: '20 Years', target: 20, type: 'years', emoji: '💍' },
  { name: '25 Years', target: 25, type: 'years', emoji: '🥇' },
  { name: '30 Years', target: 30, type: 'years', emoji: '🌺' },
  { name: '35 Years', target: 35, type: 'years', emoji: '🎭' },
  { name: '40 Years', target: 40, type: 'years', emoji: '💐' },
  { name: '45 Years', target: 45, type: 'years', emoji: '🎼' },
  { name: '50 Years', target: 50, type: 'years', emoji: '🏰' },
  { name: '100 Days', target: 100, type: 'days', emoji: '💯' },
  { name: '250 Days', target: 250, type: 'days', emoji: '🌟' },
  { name: '500 Days', target: 500, type: 'days', emoji: '🚀' },
  { name: '750 Days', target: 750, type: 'days', emoji: '🌹' },
  { name: '1,000 Days', target: 1_000, type: 'days', emoji: '🏆' },
  { name: '2,000 Days', target: 2_000, type: 'days', emoji: '🌈' },
  { name: '2,500 Days', target: 2_500, type: 'days', emoji: '🎊' },
  { name: '5,000 Days', target: 5_000, type: 'days', emoji: '🎯' },
  { name: '7,500 Days', target: 7_500, type: 'days', emoji: '🍯' },
  { name: '10,000 Days', target: 10_000, type: 'days', emoji: '🏅' },
  { name: '15,000 Days', target: 15_000, type: 'days', emoji: '💫' },
  { name: '10,000 Hours', target: 10_000, type: 'hours', emoji: '⏰' },
  { name: '25,000 Hours', target: 25_000, type: 'hours', emoji: '🕐' },
  { name: '50,000 Hours', target: 50_000, type: 'hours', emoji: '⏳' },
  { name: '100,000 Hours', target: 100_000, type: 'hours', emoji: '🕰️' },
  { name: '250,000 Hours', target: 250_000, type: 'hours', emoji: '⌚' },
  { name: '500,000 Hours', target: 500_000, type: 'hours', emoji: '🎆' },
  { name: '1,000,000 Minutes', target: 1_000_000, type: 'minutes', emoji: '⚡' },
  { name: '2,000,000 Minutes', target: 2_000_000, type: 'minutes', emoji: '✨' },
  { name: '5,000,000 Minutes', target: 5_000_000, type: 'minutes', emoji: '⭐' },
  { name: '10,000,000 Minutes', target: 10_000_000, type: 'minutes', emoji: '🌠' },
  { name: '15,000,000 Minutes', target: 15_000_000, type: 'minutes', emoji: '🎁' },
  { name: '20,000,000 Minutes', target: 20_000_000, type: 'minutes', emoji: '💝' },
  { name: '25,000,000 Minutes', target: 25_000_000, type: 'minutes', emoji: '⏲️' },
  { name: '30,000,000 Minutes', target: 30_000_000, type: 'minutes', emoji: '🌌' },
]

const calculateTargetDate = (marriageDate: Date, milestone: Milestone): Date => {
  const target = new Date(marriageDate)

  switch (milestone.type) {
  case 'years':
    target.setFullYear(target.getFullYear() + milestone.target)
    return target
  case 'hours':
    target.setHours(target.getHours() + milestone.target)
    return target
  case 'minutes':
    target.setMinutes(target.getMinutes() + milestone.target)
    return target
  case 'days':
  default:
    target.setDate(target.getDate() + milestone.target)
    return target
  }
}

const calculateRemainingText = (now: Date, targetDate: Date, milestone: Milestone): string => {
  if (now >= targetDate) return '0 days'

  const diffMs = targetDate.getTime() - now.getTime()

  // For minutes and hours, show the actual unit
  if (milestone.type === 'minutes') {
    const remaining = Math.ceil(diffMs / (1000 * 60))
    return `${remaining.toLocaleString()} ${remaining === 1 ? 'minute' : 'minutes'}`
  }

  if (milestone.type === 'hours') {
    const remaining = Math.ceil(diffMs / (1000 * 60 * 60))
    return `${remaining.toLocaleString()} ${remaining === 1 ? 'hour' : 'hours'}`
  }

  // For days, months, years - always show days
  const remainingDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  return `${remainingDays.toLocaleString()} ${remainingDays === 1 ? 'day' : 'days'}`
}

const formatMarriageDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

const calculateTimeSince = (dateString: string) => {
  const marriageDate = new Date(dateString)
  const now = new Date()

  // Use UTC dates for day calculation to avoid DST issues
  const startUTC = Date.UTC(marriageDate.getFullYear(), marriageDate.getMonth(), marriageDate.getDate())
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const days = Math.floor((nowUTC - startUTC) / (1_000 * 60 * 60 * 24))

  // For hours/minutes/seconds, use real-time elapsed since we want actual time passed
  const diffMs = now.getTime() - marriageDate.getTime()
  const hours = Math.floor(diffMs / (1_000 * 60 * 60))
  const minutes = Math.floor(diffMs / (1_000 * 60))
  const seconds = Math.floor(diffMs / 1_000)

  // Simplified years calculation
  const marriageYYYYMMDD = marriageDate.getFullYear() * 10_000 + marriageDate.getMonth() * 100 + marriageDate.getDate()
  const nowYYYYMMDD = now.getFullYear() * 10_000 + now.getMonth() * 100 + now.getDate()
  const years = Math.floor((nowYYYYMMDD - marriageYYYYMMDD) / 10_000)

  return { years, days, hours, minutes, seconds }
}

const VideoCard = ({ title, videoId }: { title: string; videoId: string }) => {
  const driveUrl = `https://drive.google.com/file/d/${videoId}/view?usp=sharing`

  return (
    <Card>
      <CardContent>
        <h3 className="text-xl font-medium mb-2">{title}</h3>

        <div className="hidden md:block">
          <div className="relative pb-[56.25%] h-0 overflow-hidden mb-4">
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              title={title}
            />
          </div>
        </div>

        <div>
          <a className="text-sm" href={driveUrl} rel="noopener noreferrer" target="_blank">
            Open in Google Drive
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <Card>
    <CardContent className="text-center">
      <div className="text-4xl font-normal text-primary mb-1">{value.toLocaleString()}</div>
      <div className="text-xl font-medium">{title}</div>
    </CardContent>
  </Card>
)

const MilestoneSection = ({
  years,
  days,
  hours,
  minutes,
}: {
  years: number
  days: number
  hours: number
  minutes: number
}) => {
  const milestoneData = useMemo(() => {
    const marriageDate = new Date(MARRIAGE_DATE)
    const now = new Date()

    const processedMilestones: ProcessedMilestone[] = MILESTONES.map((milestone) => {
      const targetDate = calculateTargetDate(marriageDate, milestone)
      const achieved = now >= targetDate
      const remainingText = calculateRemainingText(now, targetDate, milestone)
      return { ...milestone, achieved, targetDate, remainingText }
    }).sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime())

    const achieved = processedMilestones.filter((m) => m.achieved)
    const next = processedMilestones.find((m) => !m.achieved)
    const upcoming = processedMilestones.filter((m) => !m.achieved).slice(1, 6)

    return { achieved, next, upcoming }
  }, [years, days, hours, minutes])

  return (
    <div className="mb-8">
      <h2 className="text-2xl text-center mb-6">Milestones</h2>

      <Card className="bg-success-100 dark:bg-success-900 mb-6">
        <CardContent>
          <h6 className="text-xl font-medium text-center mb-3">Achieved 🎉</h6>
          <div className="flex flex-wrap gap-2 justify-center">
            {milestoneData.achieved.map((milestone) => (
              <Chip color="success" key={milestone.name} variant="primary">
                {milestone.emoji} {milestone.name}
              </Chip>
            ))}
          </div>
        </CardContent>
      </Card>

      {milestoneData.next && (
        <Card className="bg-primary mb-4">
          <CardContent className="text-center">
            <h6 className="text-xl font-medium mb-2">Next Milestone</h6>
            <div className="text-2xl mb-2">
              {milestoneData.next.emoji} {milestoneData.next.name}
            </div>
            <p>{milestoneData.next.remainingText} to go!</p>
          </CardContent>
        </Card>
      )}

      {milestoneData.upcoming.length > 0 && (
        <Card className="bg-default-400 mb-4">
          <CardContent>
            <h6 className="text-xl font-medium text-center mb-3">Coming Up</h6>
            <div className="flex flex-wrap gap-2 justify-center">
              {milestoneData.upcoming.map((milestone) => (
                <Chip key={milestone.name} variant="secondary">
                  {milestone.emoji} {milestone.name}
                </Chip>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

const RecipeAccordion = () => (
  <div className="bg-red-900 rounded-xl">
    <Accordion className="bg-transparent">
      <AccordionItem>
        <AccordionHeading>
          <AccordionTrigger>
            <ChevronDown />
            <span className="text-xl font-medium">Our Perfect Recipe For Love 👨‍🍳👩‍🍳</span>
          </AccordionTrigger>
        </AccordionHeading>
        <AccordionPanel>
          <AccordionBody className="bg-transparent text-white">
            <div className="mb-6">
              <h6 className="text-xl font-medium mb-2">Ingredients:</h6>
              <ul className="list-disc pl-6 mb-4 text-sm">
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
              </ul>
            </div>
            <div>
              <h6 className="text-xl font-medium mb-2">Instructions:</h6>
              <p className="text-sm mb-3">
                Start by introducing your lonely man and lonely woman in a cozy restaurant setting, allowing them to
                blend naturally. Add the adorable chiweenie as a binding agent - this will help hold everything together
                beautifully.
              </p>
              <p className="text-sm mb-3">
                Slowly incorporate 313 collaborative cooking sessions, stirring frequently to build teamwork and shared
                tastes. Season the mixture with magical memories from Vegas and Chicago, plus regular applications of
                St. Louis day-trip flavoring for local charm.
              </p>
              <p className="text-sm mb-3">
                Carefully fold in 2 separate households, combining gradually to avoid lumps. This process requires
                patience and lots of love. Allow the entire mixture to develop over exactly 730 days, celebrating
                progress with festive holiday gatherings.
              </p>
              <p className="text-sm">
                The final result should be perfectly seasoned, well-combined, and ready to serve a lifetime of
                happiness!
              </p>
            </div>
          </AccordionBody>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
)

export const MarriageStats = (): React.JSX.Element => {
  const [marriageStats, setMarriageStats] = useState<ReturnType<typeof calculateTimeSince> | null>(null)

  useEffect(() => {
    setMarriageStats(calculateTimeSince(MARRIAGE_DATE))
    const timer = setInterval(() => {
      setMarriageStats(calculateTimeSince(MARRIAGE_DATE))
    }, 1_000)
    return () => clearInterval(timer)
  }, [])

  const formattedDate = useMemo(() => formatMarriageDate(MARRIAGE_DATE), [])

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-normal mb-2">David &amp; Tandi Bowland</h1>
        <h5 className="text-2xl text-default-500 mb-2">Established</h5>
        <h6 className="text-xl text-primary">{formattedDate}</h6>
      </div>

      <Separator className="mb-8" />

      {marriageStats && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {marriageStats.years >= 1 && (
              <div>
                <StatCard title="Years of Bliss" value={marriageStats.years} />
              </div>
            )}
            <div>
              <StatCard title="Days Married" value={marriageStats.days} />
            </div>
            <div>
              <StatCard title="Hours Together" value={marriageStats.hours} />
            </div>
            <div>
              <StatCard title="Minutes of Love" value={marriageStats.minutes} />
            </div>
            <div>
              <StatCard title="Seconds of Joy" value={marriageStats.seconds} />
            </div>
          </div>

          <MilestoneSection
            days={marriageStats.days}
            hours={marriageStats.hours}
            minutes={marriageStats.minutes}
            years={marriageStats.years}
          />
        </>
      )}

      <RecipeAccordion />

      <Separator className="mb-8 mt-4" />

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoCard title="The Proposal" videoId={PROPOSAL_VIDEO_ID} />
          <VideoCard title="The Wedding" videoId={WEDDING_VIDEO_ID} />
        </div>
      </div>
    </div>
  )
}

export default MarriageStats
