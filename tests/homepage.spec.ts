import { test, expect } from "@playwright/test";
import { pages } from "../src/data/pages";
const origin = "http://localhost:3000";
const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/sri-krishna-vilas",
  "/gallery",
  "/nri",
  "/emi-calculator",
  "/careers",
  "/contact",
];
for (const width of [390, 768, 1440])
  for (const route of routes)
    test(`corporate smoke ${width} ${route}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.addInitScript(() =>
        sessionStorage.setItem("sipl-lead-seen", "1"),
      );
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      const response = await page.goto(origin + route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page
          .locator("h1")
          .evaluate((e) => parseFloat(getComputedStyle(e).fontSize)),
      ).toBeLessThanOrEqual(72);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
        "href",
        origin.replace("http://localhost:3000", "https://siplgroup.in") +
          (route === "/" ? "" : route),
      );
      await expect(page.locator("footer")).toContainText("Corporate Office");
      if (route === "/")
        await expect(page.locator("h1")).toContainText("Building Trust");
      expect(errors).toEqual([]);
    });
test("every corporate route responds with unique page metadata and no broken internal destination", async ({
  page,
  request,
}) => {
  test.setTimeout(90000);
  await page.addInitScript(() => sessionStorage.setItem("sipl-lead-seen", "1"));
  const titles = new Set<string>();
  for (const route of Object.keys(pages)) {
    const r = await page.goto(origin + route);
    expect(r?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), title).toBeFalsy();
    titles.add(title);
    const hrefs = await page
      .locator('main a[href^="/"]')
      .evaluateAll((els) =>
        els.map((e) => e.getAttribute("href")!.split("#")[0]),
      );
    for (const h of new Set(
      hrefs.filter(
        (h) => !h.startsWith("/assets") && !h.startsWith("/documents"),
      ),
    ))
      expect(
        h === "/" || h === "/projects/sri-krishna-vilas" || !!pages[h],
        h,
      ).toBeTruthy();
  }
  expect((await request.get(origin + "/sitemap.xml")).ok()).toBeTruthy();
  expect((await request.get(origin + "/robots.txt")).ok()).toBeTruthy();
  expect((await request.get(origin + "/not-a-real-page")).status()).toBe(404);
});
for (const width of [390, 768, 1440])
  test(`navigation, project filters and lead flow ${width}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.addInitScript(() =>
      sessionStorage.setItem("sipl-lead-seen", "1"),
    );
    await page.goto(origin);
    if (width < 901) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      const d = page.getByRole("dialog", { name: "Mobile navigation" });
      await expect(d).toBeVisible();
      await d
        .locator("summary")
        .filter({ hasText: /^Projects$/ })
        .click();
      await d.getByRole("link", { name: /Barsana/ }).click();
      await expect(page).toHaveURL(/projects\/barsana/);
      await expect(d).not.toBeVisible();
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toBeFocused();
    } else {
      await page.getByRole("button", { name: "Projects", exact: true }).click();
      await expect(page.locator("#project-menu")).toBeVisible();
      await page
        .locator("#project-menu")
        .getByRole("link", { name: /Barsana/ })
        .click();
      await expect(page).toHaveURL(/projects\/barsana/);
    }
    await page.goto(origin + "/projects");
    await page
      .getByRole("button", { name: "Hospitality", exact: true })
      .click();
    await expect(page.locator(".c-project-card")).toHaveCount(2);
    await page.getByRole("button", { name: "Upcoming", exact: true }).click();
    await expect(page.locator(".c-project-card")).toHaveCount(1);
    await expect(page.locator(".c-project-card")).toContainText("Manasi Ganga");
    await page
      .locator("header")
      .getByRole("button", { name: "Enquire", exact: true })
      .click();
    const lead = page.getByRole("dialog", {
      name: "Let’s start a conversation.",
    });
    await expect(lead).toBeVisible();
    await lead.getByLabel("Name", { exact: true }).fill("QA Visitor");
    await lead.getByLabel("Phone", { exact: true }).fill("+91 9876543210");
    await lead.getByLabel(/I agree/).check();
    await lead.getByRole("button", { name: "Prepare email draft" }).click();
    await expect(
      lead.getByRole("link", { name: "Open email draft" }),
    ).toHaveAttribute("href", /^mailto:email@siplgroup.in/);
    await page.keyboard.press("Escape");
    await expect(lead).not.toBeVisible();
    await page
      .getByRole("button", { name: "Contact SIPL", exact: true })
      .click();
    const concierge = page.getByRole("dialog", {
      name: "Krishna — SIPL concierge",
    });
    await concierge.getByRole("button", { name: /Residence Types/ }).click();
    await expect(concierge.getByRole("log")).toContainText(
      "1, 1.5, 2 and 3 BHK",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  });
test("automatic popup appears once per session, traps focus, and can reopen manually", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto(origin);
  await page.waitForTimeout(700);
  await page.clock.fastForward(14000);
  const d = page.getByRole("dialog", { name: "Let’s start a conversation." });
  await expect(d).toBeVisible();
  for (let i = 0; i < 15; i++) await page.keyboard.press("Tab");
  expect(
    await d.evaluate((e) => e.contains(document.activeElement)),
  ).toBeTruthy();
  await page.keyboard.press("Escape");
  await page
    .getByRole("link", { name: "About SIPL", exact: true })
    .first()
    .click();
  await page.clock.fastForward(20000);
  await expect(d).not.toBeVisible();
  await page
    .locator("header")
    .getByRole("button", { name: "Enquire", exact: true })
    .click();
  await expect(d).toBeVisible();
});
test("gallery keyboard, swipe, document zoom, and retained residence selector", async ({
  page,
}) => {
  await page.addInitScript(() => sessionStorage.setItem("sipl-lead-seen", "1"));
  await page.goto(origin + "/gallery/events");
  await page.locator(".c-gallery-grid button").first().click();
  const d = page.getByRole("dialog", { name: "Gallery image viewer" });
  await expect(d).toBeVisible();
  await expect(d.locator("p")).toContainText("1 / 5");
  await page.keyboard.press("ArrowRight");
  await expect(d.locator("p")).toContainText("2 / 5");
  await d
    .locator("div")
    .first()
    .dispatchEvent("touchstart", {
      touches: [{ identifier: 0, clientX: 250, clientY: 100 }],
    });
  await d
    .locator("div")
    .first()
    .dispatchEvent("touchend", {
      changedTouches: [{ identifier: 0, clientX: 70, clientY: 100 }],
    });
  await expect(d.locator("p")).toContainText("3 / 5");
  await page.keyboard.press("Escape");
  await expect(page.locator(".c-gallery-grid button").first()).toBeFocused();
  await page.goto(origin + "/projects/sri-krishna-vilas");
  await page
    .locator("#master-plan")
    .getByRole("button", { name: "Explore fullscreen" })
    .click();
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await expect(page.locator(".image-dialog[open] output")).toHaveText("150%");
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "1.5 BHK", exact: true }).click();
  await expect(page.locator(".configuration-detail")).toContainText(
    "Detailed plan available on request",
  );
  await page.getByRole("button", { name: "2 BHK", exact: true }).click();
  await page.getByRole("button", { name: "Explore supplied plan" }).click();
  await expect(
    page.getByRole("dialog", { name: "2 BHK supplied reference plan" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  const broken = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>('main a[href^="#"]')]
      .map((a) => a.getAttribute("href")!.slice(1).split("?")[0])
      .filter((id) => id && !document.getElementById(id)),
  );
  expect(broken).toEqual([]);
});
test("EMI arithmetic handles zero interest and career handoff is explicit", async ({
  page,
}) => {
  await page.addInitScript(() => sessionStorage.setItem("sipl-lead-seen", "1"));
  await page.goto(origin + "/emi-calculator");
  await page.getByLabel("Loan amount (₹)", { exact: true }).fill("1200000");
  await page.getByLabel("Interest rate (% p.a.)", { exact: true }).fill("0");
  await page.getByLabel("Loan tenure (years)", { exact: true }).fill("10");
  await expect(page.locator(".c-calc-results output")).toHaveText("₹10,000");
  await page.getByLabel("Interest rate (% p.a.)", { exact: true }).fill("12");
  await expect(page.locator(".c-calc-results output")).toHaveText("₹17,217");
  await page.goto(origin + "/careers");
  const form = page.locator("main .c-form");
  await form.getByLabel("Name", { exact: true }).fill("QA Applicant");
  await form.getByLabel("Phone", { exact: true }).fill("9876543210");
  await form.getByLabel("Email", { exact: true }).fill("qa@example.com");
  await form.getByLabel("Role of interest").fill("Engineering");
  await form.getByLabel("Experience (years)").fill("4");
  await form.getByLabel(/I agree/).check();
  await form.getByRole("button", { name: "Prepare email draft" }).click();
  await expect(form).toContainText("attach your resume");
  await expect(
    form.getByRole("link", { name: "Open email draft" }),
  ).toHaveAttribute("href", /Career%20application/);
});
for (const width of [375, 430])
  test(`small mobile layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 812 });
    await page.addInitScript(() =>
      sessionStorage.setItem("sipl-lead-seen", "1"),
    );
    for (const path of ["/", "/projects", "/contact", "/emi-calculator"]) {
      await page.goto(origin + path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
    }
  });
