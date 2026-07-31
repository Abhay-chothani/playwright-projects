const { test, expect, chromium } = require('@playwright/test');
test('Handle pages/Windows', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();


    const allpages = context.pages()
    console.log("No of Pages created : ", allpages.length)


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://orangehrm.com/")
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")
})


test.only('Handle multiple pages/Windows', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagepromice = context.waitForEvent("page")
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const newPage = await pagepromice;
    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

})