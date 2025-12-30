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

  it('should display couple names', () => {
    render(<MarriageStats />)
    expect(screen.getByText('David & Tandi Bowland')).toBeInTheDocument()
  })

  it('should display establishment date', () => {
    render(<MarriageStats />)
    expect(screen.getByText('Established')).toBeInTheDocument()
  })

  it('should display marriage statistics', () => {
    render(<MarriageStats />)
    expect(screen.getByText('Days Married')).toBeInTheDocument()
    expect(screen.getByText('Hours Together')).toBeInTheDocument()
    expect(screen.getByText('Minutes of Love')).toBeInTheDocument()
    expect(screen.getByText('Seconds of Joy')).toBeInTheDocument()
  })

  it('should display milestones section', () => {
    render(<MarriageStats />)
    expect(screen.getByText('Milestones')).toBeInTheDocument()
  })

  it('should display video cards', () => {
    render(<MarriageStats />)
    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByText('The Proposal')).toBeInTheDocument()
    expect(screen.getByText('The Wedding')).toBeInTheDocument()
  })

  it('should have proper links to Google Drive', () => {
    render(<MarriageStats />)

    const driveLinks = screen.getAllByText(/Google Drive/)
    expect(driveLinks.length).toBeGreaterThan(0)

    const firstLink = driveLinks[0].closest('a')
    expect(firstLink).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/1QjF6bZjeD2k4OKReS_Okm7xX0W_l9n52/view?usp=sharing',
    )
    expect(firstLink).toHaveAttribute('target', '_blank')
    expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should update statistics in real-time', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Days Married')).toBeInTheDocument()
    expect(screen.getByText('Hours Together')).toBeInTheDocument()
  })

  it('should display additional milestones', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Milestones')).toBeInTheDocument()
    expect(screen.getByText('Next Milestone')).toBeInTheDocument()
  })

  it('should display coming up milestones', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Coming Up')).toBeInTheDocument()
  })

  it('should display recipe accordion', () => {
    render(<MarriageStats />)

    expect(screen.getByText('Our Perfect Recipe For Love 👨‍🍳👩‍🍳')).toBeInTheDocument()
  })
})
