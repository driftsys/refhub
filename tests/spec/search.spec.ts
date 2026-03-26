import { expect, test } from "@playwright/test";

test("search produces results and navigates to entry", async ({ page }) => {
  await page.goto("/refs/");

  const input = page.locator("#search-input");
  const results = page.locator("#search-results");

  // Type query character by character to trigger input events
  await input.click();
  await input.pressSequentially("ISO 26262", { delay: 30 });
  await expect(results).toBeVisible({ timeout: 10000 });

  // Results have expected structure
  const firstResult = results.locator("a").first();
  await expect(firstResult.locator(".sr-id")).toContainText("ISO-26262");
  await expect(firstResult.locator(".sr-title")).not.toBeEmpty();
  await expect(firstResult.locator(".sr-domain")).not.toBeEmpty();
  await expect(firstResult.locator(".badge")).toBeVisible();

  // Click navigates to entry page
  await firstResult.click();
  await expect(page).toHaveURL(/\.html$/);
  await expect(page.locator("h1")).toBeVisible();
});

test("search keyboard navigation", async ({ page }) => {
  await page.goto("/refs/");

  const input = page.locator("#search-input");
  const results = page.locator("#search-results");

  await input.click();
  await input.pressSequentially("safety", { delay: 30 });
  await expect(results).toBeVisible({ timeout: 10000 });

  // ArrowDown selects first result
  await input.press("ArrowDown");
  await expect(results.locator("a").first()).toHaveAttribute(
    "aria-selected",
    "true",
  );

  // ArrowDown again selects second
  await input.press("ArrowDown");
  await expect(results.locator("a").nth(1)).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(results.locator("a").first()).toHaveAttribute(
    "aria-selected",
    "false",
  );

  // ArrowUp goes back to first
  await input.press("ArrowUp");
  await expect(results.locator("a").first()).toHaveAttribute(
    "aria-selected",
    "true",
  );

  // Escape hides results
  await input.press("Escape");
  await expect(results).toBeHidden();

  // Re-type to show results, then Enter navigates
  await input.fill("");
  await input.pressSequentially("ISO 26262", { delay: 30 });
  await expect(results).toBeVisible({ timeout: 10000 });
  await input.press("ArrowDown");
  await input.press("Enter");
  await expect(page).toHaveURL(/\.html$/);
  await expect(page.locator("h1")).toBeVisible();
});
