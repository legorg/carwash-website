import { test, expect } from '@playwright/test';

test.describe('Language Switcher', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to start fresh in German
    await page.goto('/carwash-website/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('switches language to English', async ({ page }) => {
    // Open language dropdown
    await page.getByLabel('Sprache wählen').click();
    await page.getByText('English').click();

    // Verify English content
    await expect(page.getByText('Brilliant Results,')).toBeVisible();
    await expect(page.getByText('Every Time.')).toBeVisible();
  });

  test('persists language choice on reload', async ({ page }) => {
    // Switch to English
    await page.getByLabel('Sprache wählen').click();
    await page.getByText('English').click();

    // Reload
    await page.reload();

    // Should still be English
    await expect(page.getByText('Brilliant Results,')).toBeVisible();
  });

  test('switches to Bulgarian', async ({ page }) => {
    await page.getByLabel('Sprache wählen').click();
    await page.getByText('Български').click();

    // Verify Bulgarian content
    await expect(page.getByText('Блестящи резултати,')).toBeVisible();
  });
});
