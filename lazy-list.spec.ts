import { test, expect } from '@playwright/test';


test('Load and Verify List Items', async ({ page }) => {
await page.goto('/');
await page.getByRole('tab', { name: /Timing Challenges/i }).click();


const loadBtn = page.getByRole('button', { name: /Load More Items/i });
for (let i = 0; i < 3; i++) {
await loadBtn.click();
// wait for loading spinner to disappear OR new items to appear
await page.waitForLoadState('networkidle');
// alternatively wait for a stable count change
}


const items = page.locator('.lazy-list-item');
await expect(items).toHaveCount(15);


const hasActive = await items.filter({ hasText: 'active' }).count();
const hasPending = await items.filter({ hasText: 'pending' }).count();
expect(hasActive).toBeGreaterThan(0);
expect(hasPending).toBeGreaterThan(0);
});

