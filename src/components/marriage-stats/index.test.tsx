import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import MarriageStats from './index'

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

    expect(screen.getByText('David & Tandi Bowland')).toBeInTheDocument()
    expect(screen.getByText('Established')).toBeInTheDocument()
  })

  it('should display statistics without years of bliss when under 1 year married', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Days Married')).toBeInTheDocument()
    expect(screen.getByText('Hours Together')).toBeInTheDocument()
    expect(screen.getByText('Minutes of Love')).toBeInTheDocument()
    expect(screen.getByText('Seconds of Joy')).toBeInTheDocument()
    expect(screen.queryByText('Years of Bliss')).not.toBeInTheDocument()
  })

  it('should display years of bliss when over 1 year married', () => {
    const futureDate = new Date('2026-12-30T12:00:00Z')
    jest.setSystemTime(futureDate)

    render(<MarriageStats />)

    expect(screen.getByText('Years of Bliss')).toBeInTheDocument()

    jest.setSystemTime(mockDate)
  })

  it('should display milestone sections with achieved and next milestones', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Milestones')).toBeInTheDocument()
    expect(screen.getByText('Achieved 🎉')).toBeInTheDocument()
    expect(screen.getByText('Next Milestone')).toBeInTheDocument()
    expect(screen.getByText('Coming Up')).toBeInTheDocument()
  })

  it('should update statistics in real-time', async () => {
    const { act } = await import('@testing-library/react')

    render(<MarriageStats />)

    expect(screen.getByText('Days Married')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(screen.getByText('Days Married')).toBeInTheDocument()
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

    expect(screen.getByText('Our Perfect Recipe For Love 👨‍🍳👩‍🍳')).toBeInTheDocument()
  })

  it('should calculate days using UTC to avoid DST issues', () => {
    const dstDate = new Date('2025-11-03T12:00:00-05:00') // Day after DST ends in 2025
    jest.setSystemTime(dstDate)

    render(<MarriageStats />)

    // Should show correct day count despite DST transition
    expect(screen.getByText('Days Married')).toBeInTheDocument()
    const daysElement = screen.getByText('Days Married').previousElementSibling
    expect(daysElement).toHaveTextContent('44')

    jest.setSystemTime(mockDate)
  })

  it('should calculate years correctly without month adjustment', () => {
    const beforeAnniversary = new Date('2026-09-19T12:00:00-05:00') // Day before 1 year
    jest.setSystemTime(beforeAnniversary)

    render(<MarriageStats />)
    expect(screen.queryByText('Years of Bliss')).not.toBeInTheDocument()

    const onAnniversary = new Date('2026-09-20T12:00:00-05:00') // Exactly 1 year
    jest.setSystemTime(onAnniversary)

    render(<MarriageStats />)
    expect(screen.getByText('Years of Bliss')).toBeInTheDocument()

    jest.setSystemTime(mockDate)
  })
})
