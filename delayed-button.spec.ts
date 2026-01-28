import { test, expect } from '@playwright/test';


test('Delayed Button Flow', async ({ page }) => {
await page.goto('/');
// Navigate to Timing Challenges tab (assume tab with text)
await page.getByRole('tab', { name: /Timing Challenges/i }).click();


await page.getByRole('button', { name: /Start Process/i }).click();


const confirm = page.getByRole('button', { name: /Confirm Action/i });
// Wait for it to become enabled (not merely visible)
await expect(confirm).toBeVisible();
await expect(confirm).toBeEnabled({ timeout: 8000 });


await confirm.click();
await expect(page.getByText(/success/i)).toBeVisible();
});