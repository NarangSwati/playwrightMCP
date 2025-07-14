import { test, expect } from '@playwright/test';

test('Google search for docker playwright MCP setup and open top result', async ({ page }) => {
  // 1. Open google.com
  await page.goto('https://google.com');

  // 2. Click on the search button (to focus, not needed for search, but per scenario)
  await page.getByRole('button', { name: 'Google Search' }).click();

  // 3. Type the search query and submit
  await page.getByRole('combobox', { name: 'Search' }).fill('docker playwright MCP setup');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  // 4. Wait for results and click the highest ranked page (first result: Playwright MCP GitHub)
  const firstResult = page.getByRole('link', { name: /playwright-mcp.*GitHub/i });
  await expect(firstResult).toBeVisible();
  await firstResult.click();

  // 5. Assert we are on the GitHub repo page
  await expect(page).toHaveURL(/github.com\/microsoft\/playwright-mcp/);
  await expect(page).toHaveTitle(/playwright mcp/i);
});
