import { test, expect } from '@playwright/test';


test('AssertionTest', async ({ page }) => {

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    // 1) pages has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')


    await expect(page.locator('title')).toBeVisible();
    await expect(page).toHaveTitle(/nopCommerce demo store. Register/);


    ///3) element is visible
    const logoelement = await page.locator('.header-logo')
    await expect(logoelement).toBeVisible();
})

