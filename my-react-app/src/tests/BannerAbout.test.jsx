import React from 'react'
import { render } from '@testing-library/react'
import BannerAbout from '../components/BannerAbout'

test('renders BannerAbout with overlay', () => {
  const { container } = render(<BannerAbout />)
  const section = container.querySelector('section')
  expect(section).toBeInTheDocument()
  const overlay = section.querySelector('div')
  expect(overlay).toBeInTheDocument()
})
