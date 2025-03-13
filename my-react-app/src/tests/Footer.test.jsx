import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('renders Footer with logo and text', () => {
  render(<Footer />)
  expect(screen.getByAltText('Kasa logo')).toBeInTheDocument()
  expect(screen.getByText('© 2025 Kasa. All rights reserved')).toBeInTheDocument()
})
