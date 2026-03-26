import { expect, test } from "@playwright/test";

test("domain page renders with table and breadcrumbs", async ({ page }) => {
  await page.goto("/refs/automotive/");

  // Breadcrumbs
  const breadcrumbs = page.locator("nav[aria-label='breadcrumb']");
  await expect(breadcrumbs).toBeVisible();
  await expect(breadcrumbs.locator("a")).toHaveText("RefHub");
  await expect(breadcrumbs.locator("li").last()).toHaveText("Automotive");

  // Heading and count
  await expect(page.locator("h1")).toHaveText("Automotive");
  await expect(page.locator("hgroup p")).toContainText(/\d+ reference/);

  // Description paragraph
  const desc = page.locator("main > p").first();
  await expect(desc).toBeVisible();

  // Table structure
  const table = page.locator("table[role='grid']");
  await expect(table).toBeVisible();
  await expect(table.locator("thead th")).toHaveCount(3);

  // Section grouping rows
  const sectionRows = table.locator("tr.section-row");
  expect(await sectionRows.count()).toBeGreaterThan(0);

  // Entry rows have links ending in .html
  const entryLink = table.locator("tbody code a").first();
  await expect(entryLink).toBeVisible();
  await expect(entryLink).toHaveAttribute("href", /\.html$/);
});
