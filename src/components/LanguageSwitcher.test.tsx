import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithI18n, i18nTest } from '../test/test-utils';
import LanguageSwitcher from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  it('renders the language button', () => {
    renderWithI18n(<LanguageSwitcher />);
    expect(screen.getByLabelText('Sprache wählen')).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    await user.click(screen.getByLabelText('Sprache wählen'));

    expect(screen.getByText('Deutsch')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Български')).toBeInTheDocument();
  });

  it('changes language when option is clicked', async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    await user.click(screen.getByLabelText('Sprache wählen'));
    await user.click(screen.getByText('English'));

    expect(i18nTest.language).toBe('en');

    // Reset to German for other tests
    await i18nTest.changeLanguage('de');
  });

  it('closes dropdown after selection', async () => {
    const user = userEvent.setup();
    renderWithI18n(<LanguageSwitcher />);

    await user.click(screen.getByLabelText('Sprache wählen'));
    await user.click(screen.getByText('English'));

    expect(screen.queryByText('Deutsch')).not.toBeInTheDocument();

    // Reset
    await i18nTest.changeLanguage('de');
  });
});
