import React from 'react'
import { render, screen } from '@testing-library/react'
import Rate from '../components/Rate'

test('renders 5 stars with correct full/empty stars for rating=3', () => {
  render(<Rate rating={3} />)
  expect(screen.getAllByAltText('Star full')).toHaveLength(3)
  expect(screen.getAllByAltText('Star empty')).toHaveLength(2)
})

test('renders 5 empty stars for rating=0', () => {
  render(<Rate rating={0} />)
  expect(screen.queryAllByAltText('Star full')).toHaveLength(0)
  expect(screen.getAllByAltText('Star empty')).toHaveLength(5)
})

test('renders 5 full stars for rating=5', () => {
  render(<Rate rating={5} />)
  expect(screen.getAllByAltText('Star full')).toHaveLength(5)
})
