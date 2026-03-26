import { expect, test } from "@playwright/test";

test("landing page renders with correct structure", async ({ page }) => {
  await page.goto("/refs/");

  // Title
  await expect(page).toHaveTitle(/RefHub/);
  const h1 = page.locator("header a strong");
  await expect(h1).toHaveText("RefHub");

  // Lead paragraph
  const lead = page.locator(".lead");
  await expect(lead).toBeVisible();
  await expect(lead).toContainText("registry");

  // Search input
  const search = page.locator("#search-input");
  await expect(search).toBeVisible();
  await expect(search).toHaveAttribute("placeholder", /\d+ references/);

  // Stats
  const stats = page.locator(".stats");
  await expect(stats).toContainText("40 domains");
  await expect(stats).toContainText("613 references");

  // Domain cards grid
  const cards = page.locator(".grid-domains .domain-card");
  await expect(cards).toHaveCount(40);

  // First card has title and count
  const firstCard = cards.first();
  await expect(firstCard.locator("h3")).toBeVisible();
  await expect(firstCard.locator("small")).toContainText(/\d+ reference/);
});
