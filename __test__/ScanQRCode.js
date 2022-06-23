import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://web-qr-code-seven.vercel.app/
  await page.goto("https://web-qr-code-seven.vercel.app/");

  // Click text=Get started
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app/barcode' }*/),
    page.locator("text=Get started").click(),
  ]);

  // Click text=Done
  await page.locator("text=Done").click();

  // Click button:has-text("Generate QR Codes")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app//generatecodes' }*/),
    page.locator('button:has-text("Generate QR Codes")').click(),
  ]);

  // Click [placeholder="QR Code Data"]
  await page.locator('[placeholder="QR Code Data"]').click();

  // Fill [placeholder="QR Code Data"]
  await page.locator('[placeholder="QR Code Data"]').fill("Data entry");

  // Click text=Print Screen
  await page.locator("text=Print Screen").click();

  // Click text=Scan QR Code >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app//barcode' }*/),
    page.locator("text=Scan QR Code").first().click(),
  ]);

  // Click text=Generate QR Codes >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app/generatecodes' }*/),
    page.locator("text=Generate QR Codes").first().click(),
  ]);

  // Click text=About >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app/learnmore' }*/),
    page.locator("text=About").first().click(),
  ]);

  // Click text=Contact Developer >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://web-qr-code-seven.vercel.app/contact' }*/),
    page.locator("text=Contact Developer").first().click(),
  ]);

  // Click text=Send Message
  await page.locator("text=Send Message").click();

  // Fill [placeholder="Your Name"]
  await page.locator('[placeholder="Your Name"]').fill("Dante Lentsoe");

  // Click [placeholder="Your Email"]
  await page.locator('[placeholder="Your Email"]').click();

  // Fill [placeholder="Your Email"]
  await page.locator('[placeholder="Your Email"]').fill("dllentsoe@gmail.com");

  // Click textarea[name="message"]
  await page.locator('textarea[name="message"]').click();

  // Fill textarea[name="message"]
  await page.locator('textarea[name="message"]').fill("Playwright test script");

  // Click text=Send Message
  await page.locator("text=Send Message").click();

  // ---------------------
  await context.close();
  await browser.close();
})();
