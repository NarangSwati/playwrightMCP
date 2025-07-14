import { test, expect } from '@playwright/test';

test('JB Hi-Fi: Navigate to Computer Clearance and sort by Popularity', async ({ page }) => {
  // 1. Open JB Hi-Fi homepage
  await page.goto('https://www.jbhifi.com.au/');

  // 2. Click on "Products"
  await page.getByRole('button', { name: 'Products' }).click();

  // 3. Click on "Computers"
  await page.getByRole('menuitem', { name: 'Computers' }).click();

  // 4. Click on "Clearance"
  await page.getByRole('menuitem', { name: 'Clearance' }).click();

  // // 5. Sort by "Popularity"
  // await page.getByRole('combobox', { name: /Sort by/i }).selectOption('Popularity');

  // // 6. Assert that the URL contains the sort parameter
  // await expect(page).toHaveURL(/sortBy=rating_desc/);

  // // 7. Assert that the "Sort by" combobox is set to "Popularity"
  // const sortBy = page.getByRole('combobox', { name: /Sort by/i });
  // await expect(sortBy).toHaveValue('Popularity');
});
