import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to ensure consistent state (German as fallback)
    await page.goto('/carwash-website/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('loads and shows the hero section', async ({ page }) => {
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.getByRole('link', { name: 'AquaClean', exact: true })).toBeVisible();
  });

  test('shows all main sections', async ({ page }) => {
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#oeffnungszeiten')).toBeVisible();
    await expect(page.locator('#preise')).toBeVisible();
    await expect(page.locator('#technologie')).toBeVisible();
    await expect(page.locator('#standort')).toBeVisible();
    await expect(page.locator('#impressum')).toBeVisible();
  });

  test('navigation links scroll to sections', async ({ page }) => {
    await page.locator('a[href="#preise"]').first().click();
    await expect(page).toHaveURL(/.*#preise/);
  });
});
