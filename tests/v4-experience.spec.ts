import { test, expect } from "@playwright/test";
import { answerConcierge } from "../src/data/concierge";
const origin = "http://localhost:3000";
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("sipl-lead-seen", "1"));
});
test("concierge refuses unsupported commercial claims and keeps project identities separate", () => {
  for (const q of [
    "pool price",
    "RERA number",
    "possession date",
    "available units",
    "travel minutes",
    "bank offers",
  ])
    expect(answerConcierge(q).text).toContain("Please contact SIPL");
  expect(answerConcierge("Barsana pool").image).not.toBe("pool");
  expect(answerConcierge("office address").text).toContain("Registered Office");
  expect(answerConcierge("IGBC").text).toContain("Precertified Gold");
  expect(answerConcierge("IGBC").text).toContain("GH240670");
});
for (const width of [390, 1440])
  test(`Krishna image, focus and film handoff ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin);
    await expect(page.locator("video")).toHaveCount(0);
    const launcher = page.getByRole("button", {
      name: "Contact SIPL",
      exact: true,
    });
    await launcher.click();
    const d = page.getByRole("dialog", { name: "Krishna — SIPL concierge" });
    await d.getByRole("button", { name: /Show pool/ }).click();
    await expect(d.getByRole("log")).toContainText(
      "illustrative project reference",
    );
    await expect(d.getByRole("log").locator("figure > img")).toHaveAttribute(
      "src",
      /pool/,
    );
    await d.getByRole("button", { name: "Enlarge image" }).click();
    await expect(page.locator(".image-dialog[open]")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(d).toBeVisible();
    await d
      .getByLabel("Ask Krishna", { exact: true })
      .fill("What is the price?");
    await d.getByRole("button", { name: "Send question" }).click();
    await expect(d.getByRole("log")).toContainText(
      "Please contact SIPL for the latest verified information.",
    );
    for (let i = 0; i < 20; i++) await page.keyboard.press("Tab");
    expect(
      await d.evaluate((e) => e.contains(document.activeElement)),
    ).toBeTruthy();
    await d.getByRole("button", { name: /Watch Project Film/ }).click();
    await d
      .getByRole("log")
      .getByRole("button", { name: /Watch Project Film/ })
      .click();
    const film = page.getByRole("dialog", {
      name: "Sri Krishna Vilas project film",
    });
    await expect(film).toBeVisible();
    await expect(d).not.toBeVisible();
    await expect(film.locator("video")).toHaveAttribute("controls", "");
    await page.keyboard.press("Escape");
    await expect(page.locator("video")).toHaveCount(0);
    await expect(launcher).toBeFocused();
  });
test("discovery modes, keyboard selection and animated menu preview", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(origin + "/projects");
  await page.getByRole("button", { name: "Next project", exact: true }).click();
  await expect(page.locator(".v-discovery-story")).toContainText("Barsana");
  await page.locator(".v-project-index").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".v-discovery-story")).toContainText("Raman Reti");
  await page.getByRole("button", { name: "Index view", exact: true }).click();
  await page
    .getByRole("button", { name: "Preview The Kashi Residency", exact: true })
    .hover();
  await expect(page.locator(".v-discovery-story")).toContainText(
    "The Kashi Residency",
  );
  await page.getByRole("button", { name: "Projects", exact: true }).click();
  await page
    .locator("#project-menu")
    .getByRole("link", { name: /Barsana/ })
    .hover();
  await expect(page.locator("#project-menu .r-menu-preview")).toContainText(
    "Barsana",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#project-menu")).not.toBeVisible();
});
test("values keyboard, culture rail and amenity scenes preserve content", async ({
  page,
}) => {
  await page.goto(origin + "/about");
  await page.getByRole("tab", { name: /Trust/ }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: /Ethics/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.getByRole("tabpanel")).toContainText(
    "Care in every decision",
  );
  await page.goto(origin + "/careers");
  const rail = page.locator(".v-culture-rail");
  await page.getByRole("button", { name: "Next event photograph" }).click();
  await expect
    .poll(() => rail.evaluate((e) => e.scrollLeft))
    .toBeGreaterThan(0);
  await page.goto(origin + "/projects/sri-krishna-vilas");
  await page.getByRole("button", { name: /Open Gym/, exact: false }).click();
  await expect(page.locator(".v-amenity-image img")).toHaveAttribute(
    "src",
    /gym/,
  );
  await expect(page.locator(".v-amenity-image")).toContainText(
    "Architectural visualisation",
  );
});
test("reduced motion keeps new navigation and project controls usable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(origin + "/projects");
  await page.getByRole("button", { name: "Next project", exact: true }).click();
  await expect(page.locator(".v-discovery-story")).toContainText("Barsana");
  await expect(page.locator("video")).toHaveCount(0);
});
