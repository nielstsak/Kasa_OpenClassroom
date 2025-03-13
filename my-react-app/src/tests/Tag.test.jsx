import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from '../components/Tag'

test('renders Tag with given label', () => {
  const label = 'Test Label'
  render(<Tag label={label} />)
  expect(screen.getByText(label)).toBeInTheDocument()
})
