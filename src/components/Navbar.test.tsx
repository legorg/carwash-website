import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithI18n } from '../test/test-utils';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the brand name', () => {
    renderWithI18n(<Navbar />);
    expect(screen.getByText('AquaClean')).toBeInTheDocument();
  });

  it('renders all desktop navigation links', () => {
    renderWithI18n(<Navbar />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Öffnungszeiten')).toBeInTheDocument();
    expect(screen.getByText('Preise')).toBeInTheDocument();
    expect(screen.getByText('Technologie')).toBeInTheDocument();
    expect(screen.getByText('Standort')).toBeInTheDocument();
    expect(screen.getByText('Impressum')).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    renderWithI18n(<Navbar />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('#hero');
    expect(hrefs).toContain('#oeffnungszeiten');
    expect(hrefs).toContain('#preise');
    expect(hrefs).toContain('#technologie');
    expect(hrefs).toContain('#standort');
    expect(hrefs).toContain('#impressum');
  });

  it('renders mobile menu button', () => {
    renderWithI18n(<Navbar />);
    expect(screen.getByLabelText('Menü öffnen')).toBeInTheDocument();
  });

  it('renders language switcher', () => {
    renderWithI18n(<Navbar />);
    expect(screen.getByLabelText('Sprache wählen')).toBeInTheDocument();
  });
});
