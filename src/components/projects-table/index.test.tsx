import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import React from 'react'

import ProjectsTable from './index'

describe('ProjectsTable component', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { hostname: '' },
    })
  })

  test.each([
    /Root - Infrastructure/i,
    /Email Forwarding - Lambdas, SES, SQS/i,
    /Jokes - Lambda, React/i,
    /Link Shortener - Lambda, React/i,
    /Choosee - Lambdas, React, SQS/i,
    /Other - Lambdas, React/i,
  ])('expect clicking %s option scrolls view', async (text) => {
    render(<ProjectsTable />)

    const scroller = (await screen.findByText(text)) as HTMLDivElement
    await act(async () => {
      scroller.click()
    })

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })

  test('expect clicking scroll to top button scrolls view', async () => {
    render(<ProjectsTable />)

    const scroller = (await screen.findByLabelText(/Scroll to top/i)) as HTMLDivElement
    await act(async () => {
      scroller.click()
    })

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
