import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithI18n } from '../test/test-utils';
import Hours from './Hours';

describe('Hours', () => {
  it('renders the section title', () => {
    renderWithI18n(<Hours />);
    expect(screen.getByText('Öffnungszeiten')).toBeInTheDocument();
  });

  it('renders all weekdays', () => {
    renderWithI18n(<Hours />);
    expect(screen.getByText('Montag')).toBeInTheDocument();
    expect(screen.getByText('Dienstag')).toBeInTheDocument();
    expect(screen.getByText('Mittwoch')).toBeInTheDocument();
    expect(screen.getByText('Donnerstag')).toBeInTheDocument();
    expect(screen.getByText('Freitag')).toBeInTheDocument();
    expect(screen.getByText('Samstag')).toBeInTheDocument();
    expect(screen.getByText('Sonntag')).toBeInTheDocument();
  });

  it('renders opening times', () => {
    renderWithI18n(<Hours />);
    // Weekday times
    const weekdayTimes = screen.getAllByText('07:00 – 21:00');
    expect(weekdayTimes.length).toBe(5);
    // Saturday
    expect(screen.getByText('08:00 – 20:00')).toBeInTheDocument();
    // Sunday
    expect(screen.getByText('09:00 – 18:00')).toBeInTheDocument();
  });

  it('highlights today', () => {
    renderWithI18n(<Hours />);
    expect(screen.getByText('Heute')).toBeInTheDocument();
  });

  it('renders the holiday notice', () => {
    renderWithI18n(<Hours />);
    expect(screen.getByText(/gesetzlichen Feiertagen/)).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    const { container } = renderWithI18n(<Hours />);
    expect(container.querySelector('#oeffnungszeiten')).toBeInTheDocument();
  });
});
