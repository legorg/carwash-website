import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithI18n } from '../test/test-utils';
import Pricing from './Pricing';

describe('Pricing', () => {
  it('renders the section title', () => {
    renderWithI18n(<Pricing />);
    expect(screen.getByText('Unsere Waschprogramme')).toBeInTheDocument();
  });

  it('renders all three program names', () => {
    renderWithI18n(<Pricing />);
    expect(screen.getByText('Basis')).toBeInTheDocument();
    expect(screen.getByText('Komfort')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('renders prices for all programs', () => {
    renderWithI18n(<Pricing />);
    expect(screen.getByText('8,90 €')).toBeInTheDocument();
    expect(screen.getByText('12,90 €')).toBeInTheDocument();
    expect(screen.getByText('17,90 €')).toBeInTheDocument();
  });

  it('renders extras section', () => {
    renderWithI18n(<Pricing />);
    expect(screen.getByText('Zusatzleistungen')).toBeInTheDocument();
    expect(screen.getByText('Innenreinigung (Sauger)')).toBeInTheDocument();
    expect(screen.getByText('Felgenreinigung intensiv')).toBeInTheDocument();
    expect(screen.getByText('Insektenentferner')).toBeInTheDocument();
    expect(screen.getByText('Duftbaum')).toBeInTheDocument();
  });

  it('renders extras prices', () => {
    renderWithI18n(<Pricing />);
    expect(screen.getByText('2,00 €')).toBeInTheDocument();
    expect(screen.getByText('3,00 €')).toBeInTheDocument();
    expect(screen.getByText('1,50 €')).toBeInTheDocument();
    expect(screen.getByText('1,00 €')).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    const { container } = renderWithI18n(<Pricing />);
    expect(container.querySelector('#preise')).toBeInTheDocument();
  });
});
