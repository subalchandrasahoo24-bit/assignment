import { test, expect } from '@playwright/test';


test('Conditional Login Flow', async ({ page }) => {
await page.goto('/');
await page.getByRole('tab', { name: /Flaky Selectors/i }).click();


await page.getByRole('button', { name: /Admin User/i }).click();
// Wait for dashboard load indicator
await page.getByTestId('dashboard-loading').waitFor({ state: 'detached', timeout: 8000 }).catch(() => {});


await expect(page.getByRole('region', { name: /Admin Panel/i })).toBeVisible();
await expect(page.getByRole('region', { name: /Standard Panel/i })).toBeHidden();


await page.getByRole('button', { name: /Logout/i }).click();


await page.getByRole('button', { name: /Standard User/i }).click();
await page.getByTestId('dashboard-loading').waitFor({ state: 'detached', timeout: 8000 }).catch(() => {});


await expect(page.getByRole('region', { name: /Standard Panel/i })).toBeVisible();
await expect(page.getByRole('region', { name: /Admin Panel/i })).toBeHidden();
});