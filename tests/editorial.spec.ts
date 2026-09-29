import { test, expect } from '@playwright/test';
for (const width of [390, 1440]) test(`editorial discovery and enquiry ${width}`, async ({ page }) => {
  await page.setViewportSize({width,height:900});
  await page.addInitScript(() => sessionStorage.setItem('sipl-lead-seen','1'));
  await page.goto('http://localhost:3000');
  await expect(page.locator('.ed-project')).toHaveCount(5);
  if(width===390){await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('dialog',{name:'Mobile navigation'})).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Open navigation'})).toBeFocused();}
  await page.getByRole('button',{name:'Start an enquiry'}).click();
  const d=page.getByRole('dialog',{name:'Let’s start a conversation.'});
  await d.getByLabel('Name',{exact:true}).fill('Review Visitor');
  await d.getByLabel('Phone',{exact:true}).fill('9876543210');
  await d.locator('select[name="Project"]').selectOption('Barsana');
  await d.getByLabel(/I agree/).check();
  await d.getByRole('button',{name:'Prepare email draft'}).click();
  await expect(d.getByRole('link',{name:'Open email draft'})).toHaveAttribute('href',/mailto:.*Barsana/);
  await page.keyboard.press('Escape');
  await page.goto('http://localhost:3000/projects');
  await page.getByRole('button',{name:'Hospitality',exact:true}).click();
  await page.getByRole('button',{name:'Upcoming',exact:true}).click();
  await expect(page.locator('.v-discovery-story')).toContainText('Manasi Ganga');
  await expect(page.locator('.c-small[role="status"]')).toHaveText('1 projects');
});
