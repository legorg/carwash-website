import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithI18n } from '../test/test-utils';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the title', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByText('Glänzende Ergebnisse,')).toBeInTheDocument();
    expect(screen.getByText('jedes Mal.')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByText(/Willkommen bei AquaClean/)).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    renderWithI18n(<Hero />);
    const programsLink = screen.getByText('Unsere Programme');
    const locationLink = screen.getByText('Standort & Anfahrt');

    expect(programsLink).toHaveAttribute('href', '#preise');
    expect(locationLink).toHaveAttribute('href', '#standort');
  });

  it('has the correct section id', () => {
    const { container } = renderWithI18n(<Hero />);
    expect(container.querySelector('#hero')).toBeInTheDocument();
  });
});
