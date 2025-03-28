import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header component', () => {
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

  test('applies active class on home link when at the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )
    const homeLink = screen.getByText('Accueil')
    expect(homeLink.className).toMatch(/active/)
  })

  test('does not apply active class on about link when at the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )
    const aboutLink = screen.getByText('A Propos')
    expect(aboutLink.className).not.toMatch(/active/)
  })

  test('applies active class on about link when on /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    )
    const aboutLink = screen.getByText('A Propos')
    expect(aboutLink.className).toMatch(/active/)
  })
})
