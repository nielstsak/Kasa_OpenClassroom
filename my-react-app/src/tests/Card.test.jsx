import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../components/Card'

describe('Card component', () => {
  const cover = 'test-cover.jpg'
  const title = 'Test Title'

  test('renders an image with correct src and alt attributes', () => {
    render(<Card cover={cover} title={title} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', cover)
    expect(image).toHaveAttribute('alt', title)
  })

  test('renders the title text in a heading', () => {
    render(<Card cover={cover} title={title} />)
    const titleElement = screen.getByRole('heading', { level: 2 })
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(title)
  })
})
