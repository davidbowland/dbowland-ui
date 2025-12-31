import React, { useEffect, useMemo, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

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
        <Typography component="h3" gutterBottom variant="h6">
          {title}
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', mb: 2 }}>
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title={title}
            />
          </Box>
        </Box>

        <Box>
          <Link href={driveUrl} rel="noopener noreferrer" target="_blank" variant="body2">
            Open in Google Drive
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <Card>
    <CardContent sx={{ textAlign: 'center' }}>
      <Typography color="primary" component="div" variant="h4">
        {value.toLocaleString()}
      </Typography>
      <Typography component="div" gutterBottom variant="h6">
        {title}
      </Typography>
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

      return {
        ...milestone,
        achieved,
        targetDate,
        remainingText,
      }
    }).sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime())

    const achieved = processedMilestones.filter((m) => m.achieved)
    const next = processedMilestones.find((m) => !m.achieved)
    const upcoming = processedMilestones.filter((m) => !m.achieved).slice(1, 6)

    return { achieved, next, upcoming }
  }, [years, days, hours, minutes])

  return (
    <Box sx={{ mb: 4 }}>
      <Typography component="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }} variant="h5">
        Milestones
      </Typography>

      <Card sx={{ backgroundColor: 'success.light', color: 'success.contrastText', mb: 3 }}>
        <CardContent>
          <Typography gutterBottom sx={{ textAlign: 'center' }} variant="h6">
            Achieved 🎉
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {milestoneData.achieved.map((milestone) => (
              <Chip
                color="success"
                key={milestone.name}
                label={`${milestone.emoji} ${milestone.name}`}
                sx={{ backgroundColor: 'success.dark' }}
                variant="filled"
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {milestoneData.next && (
        <Card sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', mb: 2 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Next Milestone
            </Typography>
            <Typography sx={{ mb: 1 }} variant="h5">
              {milestoneData.next.emoji} {milestoneData.next.name}
            </Typography>
            <Typography variant="body1">{milestoneData.next.remainingText} to go!</Typography>
          </CardContent>
        </Card>
      )}

      {milestoneData.upcoming.length > 0 && (
        <Card sx={{ backgroundColor: 'grey.600', mb: 2 }}>
          <CardContent>
            <Typography color="text.primary" gutterBottom sx={{ textAlign: 'center' }} variant="h6">
              Coming Up
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {milestoneData.upcoming.map((milestone) => (
                <Chip
                  key={milestone.name}
                  label={`${milestone.emoji} ${milestone.name}`}
                  sx={{ borderColor: 'grey.800', color: 'text.primary' }}
                  variant="outlined"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  )
}

const RecipeAccordion = () => (
  <Accordion sx={{ backgroundColor: 'error.dark' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">Our Perfect Recipe For Love 👨‍🍳👩‍🍳</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box sx={{ mb: 3 }}>
        <Typography gutterBottom variant="h6">
          Ingredients:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          <Typography component="li" variant="body2">
            1 lonely man
          </Typography>
          <Typography component="li" variant="body2">
            1 lonely woman
          </Typography>
          <Typography component="li" variant="body2">
            1 adorable chiweenie (for binding)
          </Typography>
          <Typography component="li" variant="body2">
            2 separate households (to be combined)
          </Typography>
          <Typography component="li" variant="body2">
            313 collaborative cooking sessions
          </Typography>
          <Typography component="li" variant="body2">
            1 collection of magical memories (Vegas and Chicago varieties)
          </Typography>
          <Typography component="li" variant="body2">
            Multiple St. Louis day-trip seasonings
          </Typography>
          <Typography component="li" variant="body2">
            730 days of careful preparation time
          </Typography>
          <Typography component="li" variant="body2">
            2 festive holiday celebrations
          </Typography>
          <Typography component="li" variant="body2">
            A generous helping of commitment and love
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography gutterBottom variant="h6">
          Instructions:
        </Typography>
        <Typography paragraph variant="body2">
          Start by introducing your lonely man and lonely woman in a cozy restaurant setting, allowing them to blend
          naturally. Add the adorable chiweenie as a binding agent - this will help hold everything together
          beautifully.
        </Typography>
        <Typography paragraph variant="body2">
          Slowly incorporate 313 collaborative cooking sessions, stirring frequently to build teamwork and shared
          tastes. Season the mixture with magical memories from Vegas and Chicago, plus regular applications of St.
          Louis day-trip flavoring for local charm.
        </Typography>
        <Typography paragraph variant="body2">
          Carefully fold in 2 separate households, combining gradually to avoid lumps. This process requires patience
          and lots of love. Allow the entire mixture to develop over exactly 730 days, celebrating progress with festive
          holiday gatherings.
        </Typography>
        <Typography variant="body2">
          The final result should be perfectly seasoned, well-combined, and ready to serve a lifetime of happiness!
        </Typography>
      </Box>
    </AccordionDetails>
  </Accordion>
)

export const MarriageStats = (): JSX.Element => {
  const [, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1_000)

    return () => clearInterval(timer)
  }, [])

  const marriageStats = calculateTimeSince(MARRIAGE_DATE)
  const formattedDate = useMemo(() => formatMarriageDate(MARRIAGE_DATE), [])

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography component="h1" gutterBottom variant="h3">
          David & Tandi Bowland
        </Typography>
        <Typography color="text.secondary" gutterBottom variant="h5">
          Established
        </Typography>
        <Typography color="primary" variant="h6">
          {formattedDate}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {marriageStats.years >= 1 && (
          <Grid item md={2.4} sm={6} xs={12}>
            <StatCard title="Years of Bliss" value={marriageStats.years} />
          </Grid>
        )}
        <Grid item md={marriageStats.years >= 1 ? 2.4 : 3} sm={6} xs={12}>
          <StatCard title="Days Married" value={marriageStats.days} />
        </Grid>
        <Grid item md={marriageStats.years >= 1 ? 2.4 : 3} sm={6} xs={12}>
          <StatCard title="Hours Together" value={marriageStats.hours} />
        </Grid>
        <Grid item md={marriageStats.years >= 1 ? 2.4 : 3} sm={6} xs={12}>
          <StatCard title="Minutes of Love" value={marriageStats.minutes} />
        </Grid>
        <Grid item md={marriageStats.years >= 1 ? 2.4 : 3} sm={6} xs={12}>
          <StatCard title="Seconds of Joy" value={marriageStats.seconds} />
        </Grid>
      </Grid>

      <MilestoneSection
        days={marriageStats.days}
        hours={marriageStats.hours}
        minutes={marriageStats.minutes}
        years={marriageStats.years}
      />

      <RecipeAccordion />

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography component="h2" gutterBottom variant="h5">
          Our Story
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <VideoCard title="The Proposal" videoId={PROPOSAL_VIDEO_ID} />
          </Grid>
          <Grid item md={6} xs={12}>
            <VideoCard title="The Wedding" videoId={WEDDING_VIDEO_ID} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default MarriageStats
