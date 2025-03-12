import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

describe('Banner component', () => {
  test('renders the banner with correct title', () => {
    render(<Banner />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Chez vous, partout et ailleurs')
  })
})
