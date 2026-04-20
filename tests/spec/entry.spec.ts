import { expect, test } from "@playwright/test";

test("entry page renders with metadata", async ({ page }) => {
  await page.goto("/refs/functional-safety/iec-61508.html");

  // Breadcrumbs — 3 levels
  const crumbs = page.locator("nav[aria-label='breadcrumb'] li");
  await expect(crumbs).toHaveCount(3);
  await expect(crumbs.nth(0).locator("a")).toHaveText("RefHub");
  await expect(crumbs.nth(1).locator("a")).toContainText("Functional Safety");
  await expect(crumbs.nth(2)).toContainText("IEC-61508");

  // Entry heading
  const h1 = page.locator("h1 code");
  await expect(h1).toHaveText("IEC-61508");

  // Subtitle in hgroup
  const subtitle = page.locator("hgroup p");
  await expect(subtitle).toBeVisible();
  await expect(subtitle).not.toBeEmpty();

  // Abstract
  const abstract = page.locator("article > p").first();
  await expect(abstract).toBeVisible();
  await expect(abstract).not.toBeEmpty();

  // Definition list metadata
  const dl = page.locator("dl");
  await expect(dl).toBeVisible();

  const dtTexts = await dl.locator("dt").allTextContents();
  expect(dtTexts).toContain("Document");
  expect(dtTexts).toContain("URL");
  expect(dtTexts).toContain("Label");
  expect(dtTexts).toContain("Keywords");

  // URL links to https
  const urlLink = dl.locator("a[href^='https://']").first();
  await expect(urlLink).toBeVisible();

  // Badge
  const badge = dl.locator(".badge").first();
  await expect(badge).toBeVisible();

  // Keywords
  const kbds = dl.locator("kbd");
  expect(await kbds.count()).toBeGreaterThan(0);

  // Domain link at bottom
  const domainLink = page.locator("article small a");
  await expect(domainLink).toContainText("Functional Safety");
});
