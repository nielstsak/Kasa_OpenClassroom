import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Carroussel from '../components/Carroussel'

describe('Carroussel component', () => {
  const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']

  test('returns null when pictures array is empty', () => {
    const { container } = render(<Carroussel pictures={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test('renders the first picture by default', () => {
    render(<Carroussel pictures={pictures} />)
    const image = screen.getByRole('img', { name: /Slide 0/ })
    expect(image).toHaveAttribute('src', pictures[0])
  })

  test('renders navigation arrows and counter when more than one picture', () => {
    render(<Carroussel pictures={pictures} />)
    const prevArrow = screen.getByAltText('Slide précédent')
    const nextArrow = screen.getByAltText('Slide suivant')
    expect(prevArrow).toBeInTheDocument()
    expect(nextArrow).toBeInTheDocument()
    const counter = screen.getByText(/1\/3/)
    expect(counter).toBeInTheDocument()
  })

  test('cycles through pictures on arrow click', () => {
    render(<Carroussel pictures={pictures} />)
    // Vérifier la slide initiale
    let image = screen.getByRole('img', { name: /Slide 0/ })
    expect(image).toHaveAttribute('src', pictures[0])

    const nextArrow = screen.getByAltText('Slide suivant')
    const prevArrow = screen.getByAltText('Slide précédent')

    // Passage à la slide suivante
    fireEvent.click(nextArrow)
    image = screen.getByRole('img', { name: /Slide 1/ })
    expect(image).toHaveAttribute('src', pictures[1])

    // Retour à la slide précédente
    fireEvent.click(prevArrow)
    image = screen.getByRole('img', { name: /Slide 0/ })
    expect(image).toHaveAttribute('src', pictures[0])

    fireEvent.click(prevArrow)
    image = screen.getByRole('img', { name: /Slide 2/ })
    expect(image).toHaveAttribute('src', pictures[2])
  })

  test('does not render navigation arrows if only one picture', () => {
    render(<Carroussel pictures={['onlypic.jpg']} />)
    const prevArrow = screen.queryByAltText('Slide précédent')
    const nextArrow = screen.queryByAltText('Slide suivant')
    expect(prevArrow).not.toBeInTheDocument()
    expect(nextArrow).not.toBeInTheDocument()
  })
})
