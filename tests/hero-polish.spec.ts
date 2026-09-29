import { test, expect } from "@playwright/test";
for (const route of ["/", "/projects/sri-krishna-vilas"])
  test(`poster-first approved film ${route}`, async ({ page }) => {
    await page.addInitScript(() =>
      sessionStorage.setItem("sipl-lead-seen", "1"),
    );
    await page.goto("http://localhost:3000" + route);
    await expect(page.locator("video")).toHaveCount(0);
    await page
      .getByRole("button", { name: "Watch Sri Krishna Vilas film" })
      .click();
    const dialog = page.getByRole("dialog", {
      name: "Sri Krishna Vilas project film",
    });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("video")).toHaveAttribute(
      "src",
      "/media/sri-krishna-vilas-corporate-film.mp4",
    );
    await expect(dialog.locator("video")).toHaveJSProperty("controls", true);
    await expect(dialog.locator("video")).toHaveJSProperty("loop", false);
    await page.keyboard.press("Escape");
    await expect(page.locator("video")).toHaveCount(0);
    await expect(
      page.getByRole("button", { name: "Watch Sri Krishna Vilas film" }),
    ).toBeFocused();
  });
test("reduced motion stops marquee and preserves poster-first media", async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() => sessionStorage.setItem("sipl-lead-seen", "1"));
  await page.goto("http://localhost:3000");
  await expect(page.locator("video")).toHaveCount(0);
  await expect(page.locator(".c-marquee>div")).toHaveCSS(
    "animation-name",
    "none",
  );
  for (const asset of [
    "/assets/plan-1bhk.webp",
    "/assets/plan-2bhk.webp",
    "/assets/plan-3bhk.webp",
    "/documents/sri-krishna-vilas-official-brochure.pdf",
  ])
    expect(
      (await request.get("http://localhost:3000" + asset, {timeout:30000})).ok(),
    ).toBeTruthy();
});
