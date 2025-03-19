import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

test('renders the banner with correct title', () => {
  render(<Banner />)
  const headings = screen.queryAllByText(/Chez vous,\s*partout et ailleurs/i)
  expect(headings.length).toBeGreaterThan(0)
})
