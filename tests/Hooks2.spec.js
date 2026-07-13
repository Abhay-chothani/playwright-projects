import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")

    //Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator('//button[normalize-space()="Log in"]').click()


})

test.afterEach(async ({ page }) => {
    //Logout
    await page.locator("#logout2").click()

})

//test('Home Page Test', async ({ page }) => {  page no need to add in this line because in beforeach mentioned page 


test('Home Page Test', async ({ page }) => {

    //Home Page
    const products = await page.$$(".hrefch")
    expect(products).toHaveLength(9)

});


test('Add product to cart Test', async ({ page }) => {

    //Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })

})