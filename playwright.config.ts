import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/spec",
  timeout: 15_000,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:8000/refs",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "deno run --allow-net --allow-read scripts/dev-server.ts",
    port: 8000,
    reuseExistingServer: !process.env.CI,
    timeout: 10_000,
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
