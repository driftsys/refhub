import { expect, test } from "@playwright/test";

test("full navigation flow: landing -> domain -> entry -> back", async ({
  page,
}) => {
  // Start at landing
  await page.goto("/refs/");
  await expect(page).toHaveTitle(/RefHub/);

  // Click the Automotive domain card (match exact h3 text)
  await page
    .locator(".domain-card")
    .filter({ has: page.locator("h3", { hasText: /^Automotive$/ }) })
    .locator("a")
    .click();
  await expect(page).toHaveURL(/\/refs\/automotive\/$/);
  await expect(page.locator("h1")).toHaveText("Automotive");

  // Click the first entry link
  const firstEntry = page.locator("tbody code a").first();
  const entryId = await firstEntry.textContent();
  await firstEntry.click();
  await expect(page).toHaveURL(/\/refs\/automotive\/.*\.html$/);
  await expect(page.locator("h1 code")).toHaveText(entryId!);

  // Navigate back via breadcrumb to domain
  await page
    .locator("nav[aria-label='breadcrumb'] a", { hasText: "Automotive" })
    .click();
  await expect(page).toHaveURL(/\/refs\/automotive\/$/);
  await expect(page.locator("h1")).toHaveText("Automotive");

  // Navigate back via breadcrumb to landing
  await page
    .locator("nav[aria-label='breadcrumb'] a", { hasText: "RefHub" })
    .click();
  await expect(page.locator(".grid-domains")).toBeVisible();
});
