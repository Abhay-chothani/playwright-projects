import { test, expect } from '@playwright/test';


test('Mouse Hover', async ({ page }) => {

    await page.goto("https://darshan.ac.in/", {
        waitUntil: "domcontentloaded"
    })

    const about = await page.locator("//a[normalize-space()='About']");
    const aboutuniversity = await page.locator("//a[normalize-space()='About University']");

    await about.hover()
    await aboutuniversity.hover()

    await page.waitForTimeout(5000)


})