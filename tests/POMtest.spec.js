import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { log } from 'node:console';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test('POM Test', async ({ page }) => {

    // //Without POM
    // await page.goto("https://www.demoblaze.com/")

    // //Login
    // await page.locator("#login2").click()
    // await page.locator("#loginusername").fill("pavanol")
    // await page.locator("#loginpassword").fill("test@123")
    // await page.locator('//button[normalize-space()="Log in"]').click()


    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("pavanol", "test@123");
    await page.waitForTimeout(3000)


    //Home
    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000);
    await home.gotocart();

    //Cart
    const cart = new  CartPage(page)
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart("Nexus 6")
    expect(await status).toBe(true);



})



