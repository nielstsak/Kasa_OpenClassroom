import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Cards from '../components/Cards'

describe('Cards component', () => {
  const properties = [
    { id: '1', cover: 'cover1.jpg', title: 'Property 1' },
    { id: '2', cover: 'cover2.jpg', title: 'Property 2' },
    { id: '3', cover: 'cover3.jpg', title: 'Property 3' }
  ]

  test('renders a Link for each property and displays the title', () => {
    render(
      <MemoryRouter>
        <Cards properties={properties} />
      </MemoryRouter>
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(properties.length)
    properties.forEach(property => {
      expect(screen.getByText(property.title)).toBeInTheDocument()
    })
  })
})
