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
    /Email Forwarding - DynamoDB, Lambda, SES, SQS/i,
    /Jokes - DynamoDB, Lambda, Polly, React/i,
    /Link Shortener - DynamoDB, Lambda, React/i,
    /DBD Build Maker - DynamoDB, Lambda, React/i,
    /Choosee - DynamoDB, Lambda, React/i,
    /Other - Lambda, React, SQS/i,
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
