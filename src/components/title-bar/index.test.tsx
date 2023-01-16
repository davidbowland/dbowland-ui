import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import React from 'react'

import TitleBar from './index'

describe('Title bar component', () => {
  describe('mobile', () => {
    test('expect rendering TitleBar has title in output', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText('dbowland.com').length).toEqual(2)
    })

    test('expect clicking menu displays menu items', async () => {
      render(<TitleBar />)

      const menuButton = (await screen.findByLabelText(/menu/i, { selector: 'button' })) as HTMLButtonElement
      await act(async () => {
        menuButton.click()
      })
      const resumeButton = (await screen.queryAllByText(/resume/i)[1]) as HTMLButtonElement
      await act(async () => {
        resumeButton.click()
      })

      expect(screen.queryAllByText(/GitHub/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/LinkedIn/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/Projects/i)[1]).toBeVisible()
      expect(screen.queryAllByText(/Resume/i)[1]).toBeVisible()
    })
  })

  describe('desktop', () => {
    test('expect rendering TitleBar has title in output', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText('dbowland.com').length).toEqual(2)
    })

    test('expect rendering TitleBar contains menu items', () => {
      render(<TitleBar />)

      expect(screen.queryAllByText(/GitHub/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/LinkedIn/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/Projects/i)[0]).toBeVisible()
      expect(screen.queryAllByText(/Resume/i)[0]).toBeVisible()
    })
  })
})
