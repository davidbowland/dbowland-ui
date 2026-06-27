export interface Milestone {
  name: string
  target: number
  type: 'years' | 'days' | 'hours' | 'minutes'
  emoji: string
}

export interface ProcessedMilestone extends Milestone {
  achieved: boolean
  targetDate: Date
  remainingText: string
}

export interface MilestoneData {
  achieved: ProcessedMilestone[]
  next: ProcessedMilestone | null
  upcoming: ProcessedMilestone[]
}

export interface MarriageStatsData {
  years: number
  yearsDecimal: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const MILESTONES: Milestone[] = [
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
  if (milestone.type === 'minutes') {
    const remaining = Math.ceil(diffMs / (1000 * 60))
    return `${remaining.toLocaleString()} ${remaining === 1 ? 'minute' : 'minutes'}`
  }
  if (milestone.type === 'hours') {
    const remaining = Math.ceil(diffMs / (1000 * 60 * 60))
    return `${remaining.toLocaleString()} ${remaining === 1 ? 'hour' : 'hours'}`
  }
  const remainingDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  return `${remainingDays.toLocaleString()} ${remainingDays === 1 ? 'day' : 'days'}`
}

export const processMilestones = (marriageDateString: string): MilestoneData => {
  const marriageDate = new Date(marriageDateString)
  const now = new Date()

  const processed: ProcessedMilestone[] = MILESTONES.map((milestone) => {
    const targetDate = calculateTargetDate(marriageDate, milestone)
    const achieved = now >= targetDate
    const remainingText = calculateRemainingText(now, targetDate, milestone)
    return { ...milestone, achieved, targetDate, remainingText }
  }).sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime())

  return {
    achieved: processed.filter((m) => m.achieved),
    next: processed.find((m) => !m.achieved) ?? null,
    upcoming: processed.filter((m) => !m.achieved).slice(1, 6),
  }
}

export const calculateTimeSince = (dateString: string): MarriageStatsData => {
  const marriageDate = new Date(dateString)
  const now = new Date()

  const startUTC = Date.UTC(marriageDate.getFullYear(), marriageDate.getMonth(), marriageDate.getDate())
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const days = Math.floor((nowUTC - startUTC) / (1_000 * 60 * 60 * 24))

  const diffMs = now.getTime() - marriageDate.getTime()
  const hours = Math.floor(diffMs / (1_000 * 60 * 60))
  const minutes = Math.floor(diffMs / (1_000 * 60))
  const seconds = Math.floor(diffMs / 1_000)

  const marriageYYYYMMDD = marriageDate.getFullYear() * 10_000 + marriageDate.getMonth() * 100 + marriageDate.getDate()
  const nowYYYYMMDD = now.getFullYear() * 10_000 + now.getMonth() * 100 + now.getDate()
  const years = Math.floor((nowYYYYMMDD - marriageYYYYMMDD) / 10_000)

  const yearsDecimal = Math.round((diffMs / (365.25 * 24 * 3_600 * 1_000)) * 100) / 100

  return { years, yearsDecimal, days, hours, minutes, seconds }
}
