import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import TitleBar from './index'

describe('Title bar component', () => {
  describe('mobile', () => {
    it('should render title in output', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText('dbowland.com').length).toEqual(2)
    })

    it('should display menu items when clicking menu', async () => {
      const user = userEvent.setup()
      render(<TitleBar />)

      const menuButton = (await screen.findByLabelText(/menu/i, { selector: 'button' })) as HTMLButtonElement
      await act(async () => {
        await user.click(menuButton)
      })
      const resumeButton = (await screen.queryAllByText(/resume/i)[1]) as HTMLButtonElement
      await act(async () => {
        await user.click(resumeButton)
      })

      expect(screen.queryAllByText(/GitHub/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/LinkedIn/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/Projects/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/Resume/i)[1]).toBeVisible()
    })
  })

  describe('desktop', () => {
    it('should render title in output', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText('dbowland.com').length).toEqual(2)
    })

    it('should contain menu items', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText(/GitHub/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/LinkedIn/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/Projects/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/Resume/i)[0]).toBeVisible()
    })
  })
})
