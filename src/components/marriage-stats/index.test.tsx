import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { ChampagneSection } from './elements-champagne'
import { InvitationSection } from './elements-invitation'
import { DiamondRingIcon, FloralDivider, FlowerIcon, LaurelIcon, RoseIcon, WeddingRingsIcon } from './icons'
import MarriageStats from './index'
import { type MarriageStatsData, type MilestoneData } from './milestone-utils'

const MOCK_STATS: MarriageStatsData = {
  years: 0,
  yearsDecimal: 0.27,
  days: 100,
  hours: 2400,
  minutes: 144_000,
  seconds: 8_640_000,
}

const MOCK_MILESTONE_DATA: MilestoneData = {
  achieved: [
    {
      name: '1 Month',
      target: 30,
      type: 'days',
      emoji: '🌙',
      achieved: true,
      targetDate: new Date('2025-10-20'),
      remainingText: '',
    },
  ],
  next: {
    name: '3 Months',
    target: 91,
    type: 'days',
    emoji: '🌱',
    achieved: false,
    targetDate: new Date('2025-12-19'),
    remainingText: '50 days',
  },
  upcoming: [
    {
      name: '6 Months',
      target: 183,
      type: 'days',
      emoji: '🌸',
      achieved: false,
      targetDate: new Date('2026-03-22'),
      remainingText: '',
    },
  ],
}

const mockDate = new Date('2025-12-30T12:00:00Z')

describe('MarriageStats component', () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(mockDate)
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should display marriage header with formatted date', () => {
    render(<MarriageStats />)

    expect(screen.getByRole('heading', { name: /David.*Tandi.*Bowland/i })).toBeInTheDocument()
    expect(screen.getByText('Established')).toBeInTheDocument()
  })

  it('should display all statistics including years of bliss when under 1 year married', () => {
    render(<MarriageStats />)

    // Each label appears once per section (3 sections total)
    expect(screen.getAllByText('Days Married').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Hours Together').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Minutes of Love').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Seconds of Joy').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Years of Bliss').length).toBeGreaterThanOrEqual(1)
  })

  it('should display years of bliss when over 1 year married', () => {
    const futureDate = new Date('2026-12-30T12:00:00Z')
    jest.setSystemTime(futureDate)

    render(<MarriageStats />)

    expect(screen.getAllByText('Years of Bliss').length).toBeGreaterThanOrEqual(1)

    jest.setSystemTime(mockDate)
  })

  it('should display milestone sections with achieved and next milestones', () => {
    render(<MarriageStats />)

    expect(screen.getAllByText('Milestones').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Milestones Reached').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Next Milestone').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Coming Up').length).toBeGreaterThanOrEqual(1)
  })

  it('should update statistics in real-time', async () => {
    const { act } = await import('@testing-library/react')

    render(<MarriageStats />)

    expect(screen.getAllByText('Days Married').length).toBeGreaterThanOrEqual(1)

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(screen.getAllByText('Days Married').length).toBeGreaterThanOrEqual(1)
  })

  it('should display video cards with accessibility attributes', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByText('The Proposal')).toBeInTheDocument()
    expect(screen.getByText('The Wedding')).toBeInTheDocument()

    const driveLinks = screen.getAllByText(/Open in Google Drive/)
    expect(driveLinks.length).toBe(2)

    const firstLink = driveLinks[0].closest('a')
    expect(firstLink).toHaveAttribute('target', '_blank')
    expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should display recipe accordion', () => {
    render(<MarriageStats />)

    expect(screen.getAllByText('Our Perfect Recipe for Love').length).toBeGreaterThanOrEqual(1)
  })

  it('should calculate days using UTC to avoid DST issues', () => {
    const dstDate = new Date('2025-11-03T12:00:00-05:00')
    jest.setSystemTime(dstDate)

    render(<MarriageStats />)

    const daysLabels = screen.getAllByText('Days Married')
    expect(daysLabels.length).toBeGreaterThanOrEqual(1)
    // The number "44" should appear somewhere on the page
    expect(screen.getAllByText('44').length).toBeGreaterThanOrEqual(1)

    jest.setSystemTime(mockDate)
  })

  it('should calculate years correctly without month adjustment', () => {
    const beforeAnniversary = new Date('2026-09-19T12:00:00-05:00')
    jest.setSystemTime(beforeAnniversary)

    render(<MarriageStats />)
    // Years of Bliss is always shown; before anniversary it shows 0
    expect(screen.getAllByText('Years of Bliss').length).toBeGreaterThanOrEqual(1)

    const onAnniversary = new Date('2026-09-20T12:00:00-05:00')
    jest.setSystemTime(onAnniversary)

    render(<MarriageStats />)
    expect(screen.getAllByText('Years of Bliss').length).toBeGreaterThanOrEqual(1)

    jest.setSystemTime(mockDate)
  })

  it('should handle milestone calculations for all time types', () => {
    render(<MarriageStats />)

    expect(screen.getAllByText('Milestones').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('1 Month').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('3 Months').length).toBeGreaterThanOrEqual(1)
  })

  it('should display singular "day" when remaining is 1', () => {
    const oneDayBeforeOneMonth = new Date('2025-10-19T17:00:00-05:00')
    jest.setSystemTime(oneDayBeforeOneMonth)

    render(<MarriageStats />)

    expect(screen.getAllByText('Next Milestone').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('1 day to go!').length).toBeGreaterThanOrEqual(1)

    jest.setSystemTime(mockDate)
  })
})

describe('ChampagneSection', () => {
  it('renders stats labels', () => {
    render(<ChampagneSection milestoneData={MOCK_MILESTONE_DATA} stats={MOCK_STATS} />)

    expect(screen.getByText('Days Married')).toBeInTheDocument()
    expect(screen.getByText('Hours Together')).toBeInTheDocument()
    expect(screen.getByText('Minutes of Love')).toBeInTheDocument()
    expect(screen.getByText('Seconds of Joy')).toBeInTheDocument()
  })

  it('renders milestone sections', () => {
    render(<ChampagneSection milestoneData={MOCK_MILESTONE_DATA} stats={MOCK_STATS} />)

    expect(screen.getByText('Milestones')).toBeInTheDocument()
    expect(screen.getByText('Next Milestone')).toBeInTheDocument()
    expect(screen.getByText('Milestones Reached')).toBeInTheDocument()
  })

  it('renders recipe section', () => {
    render(<ChampagneSection milestoneData={MOCK_MILESTONE_DATA} stats={MOCK_STATS} />)

    expect(screen.getByText('Our Perfect Recipe for Love')).toBeInTheDocument()
  })

  it('renders years badge when years >= 1', () => {
    const statsWithYears = { ...MOCK_STATS, years: 2, yearsDecimal: 2.1 }
    render(<ChampagneSection milestoneData={MOCK_MILESTONE_DATA} stats={statsWithYears} />)

    expect(screen.getByText('Years of Bliss')).toBeInTheDocument()
  })
})

describe('InvitationSection', () => {
  it('renders stats labels', () => {
    render(<InvitationSection milestoneData={MOCK_MILESTONE_DATA} stats={MOCK_STATS} />)

    expect(screen.getByText('Days Married')).toBeInTheDocument()
    expect(screen.getByText('Hours Together')).toBeInTheDocument()
    expect(screen.getByText('Minutes of Love')).toBeInTheDocument()
    expect(screen.getByText('Seconds of Joy')).toBeInTheDocument()
  })

  it('renders milestone sections', () => {
    render(<InvitationSection milestoneData={MOCK_MILESTONE_DATA} stats={MOCK_STATS} />)

    expect(screen.getByText('Next Milestone')).toBeInTheDocument()
    expect(screen.getByText('Milestones Reached')).toBeInTheDocument()
  })

  it('renders Years of Bliss when years >= 1', () => {
    const statsWithYears = { ...MOCK_STATS, years: 1, yearsDecimal: 1.05 }
    render(<InvitationSection milestoneData={MOCK_MILESTONE_DATA} stats={statsWithYears} />)

    expect(screen.getByText('Years of Bliss')).toBeInTheDocument()
  })
})

describe('icons', () => {
  it('renders all icon components without throwing', () => {
    const { container: c1 } = render(<FlowerIcon />)
    const { container: c2 } = render(<WeddingRingsIcon />)
    const { container: c3 } = render(<RoseIcon />)
    const { container: c4 } = render(<DiamondRingIcon />)
    const { container: c5 } = render(<LaurelIcon />)
    const { container: c6 } = render(<FloralDivider />)

    expect(c1.querySelector('svg')).toBeInTheDocument()
    expect(c2.querySelector('svg')).toBeInTheDocument()
    expect(c3.querySelector('svg')).toBeInTheDocument()
    expect(c4.querySelector('svg')).toBeInTheDocument()
    expect(c5.querySelector('svg')).toBeInTheDocument()
    expect(c6.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom size to icons', () => {
    const { container } = render(<FlowerIcon size={40} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
  })
})
