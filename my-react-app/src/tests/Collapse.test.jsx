import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from '../components/Collapse'

describe('Collapse component', () => {
  const title = 'Test Collapse'
  const contentString = 'This is a test content'
  const contentArray = ['Line one of content', 'Line two of content']

  // Matcher fonctionnel vérifiant si le texte normalisé contient le texte attendu
  const matchText = expected => (content, element) => {
    if (element.tagName.toLowerCase() !== 'p') return false
    const normalized = element.textContent.replace(/\s+/g, ' ').trim()
    return normalized.includes(expected)
  }

  test('renders the collapse header and does not show content by default (string content)', () => {
    render(<Collapse title={title} content={contentString} />)
    const header = screen.getByText(title)
    expect(header).toBeInTheDocument()
    expect(screen.queryByText(matchText(contentString))).not.toBeInTheDocument()
  })

  test('toggles content visibility when header is clicked (string content)', () => {
    render(<Collapse title={title} content={contentString} />)
    const header = screen.getByText(title)
    // Au départ, le contenu n'est pas affiché
    expect(screen.queryByText(matchText(contentString))).not.toBeInTheDocument()
    // Ouvrir le collapse
    fireEvent.click(header)
    const openedContent = screen.getByText(matchText(contentString))
    expect(openedContent).toBeInTheDocument()
    // Fermer le collapse
    fireEvent.click(header)
    expect(screen.queryByText(matchText(contentString))).not.toBeInTheDocument()
  })

  test('toggles content visibility when header is clicked (array content)', () => {
    render(<Collapse title={title} content={contentArray} />)
    const header = screen.getByText(title)
    contentArray.forEach(line => {
      expect(screen.queryByText(matchText(line))).not.toBeInTheDocument()
    })
    // Ouvrir le collapse
    fireEvent.click(header)
    contentArray.forEach(line => {
      expect(screen.getByText(matchText(line))).toBeInTheDocument()
    })
    // Fermer le collapse
    fireEvent.click(header)
    contentArray.forEach(line => {
      expect(screen.queryByText(matchText(line))).not.toBeInTheDocument()
    })
  })

  test('arrow image toggles its class based on collapse state', () => {
    render(<Collapse title={title} content={contentString} />)
    const arrow = screen.getByAltText('toggle arrow')
    expect(arrow.className).not.toMatch(/arrowOpen/)
    const header = screen.getByText(title)
    fireEvent.click(header)
    expect(arrow.className).toMatch(/arrowOpen/)
  })
})
