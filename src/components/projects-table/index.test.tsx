import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it.each([
    /Root - Infrastructure/i,
    /Email Forwarding - DynamoDB, Lambda, SES, SQS/i,
    /Jokes - DynamoDB, Lambda, Polly, React/i,
    /DBD Build Maker - DynamoDB, Lambda, React/i,
    /Choosee - DynamoDB, Lambda, React/i,
    /Other - Lambda, React, SQS/i,
  ])('should scroll view when clicking %s option', async (text) => {
    const user = userEvent.setup()
    render(<ProjectsTable />)

    const scroller = (await screen.findByText(text)) as HTMLDivElement
    await act(async () => {
      await user.click(scroller)
    })

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('should scroll view when clicking scroll to top button', async () => {
    const user = userEvent.setup()
    render(<ProjectsTable />)

    const scroller = (await screen.findByLabelText(/Scroll to top/i)) as HTMLDivElement
    await act(async () => {
      await user.click(scroller)
    })

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
