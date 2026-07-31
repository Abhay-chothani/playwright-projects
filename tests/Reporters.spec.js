import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async ({ page }) => {
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await expect(page).toHaveTitle('OpenCart - Demo');
})

test('Test3', async ({ page }) => {
    await page.goto("https://www.nopcommerce.com/en?srsltid=AfmBOoqIcu886lvnHb9ov94tQ2Jy8WLN7owSIm4s-dJX-UYFGc2cGDfE");
    await expect(page).toHaveTitle('Free and open-source eCommerce platform. ASP.NET Core based shopping cart. - nopCommerce');
})


//allure report : allure generate my-allure-results -o allure report --clean