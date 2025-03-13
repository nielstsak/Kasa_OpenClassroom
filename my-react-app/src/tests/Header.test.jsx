import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { MemoryRouter } from 'react-router-dom'

test('renders Header with logo and navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  expect(screen.getByAltText('Kasa logo')).toBeInTheDocument()
  expect(screen.getByText('Accueil')).toBeInTheDocument()
  expect(screen.getByText('A Propos')).toBeInTheDocument()
})
