//import { test, expect } from '@playwright/test';
const {test, expect} = require('@playwright/test');

test('Hone Page', async ({ page }) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    const pagetitle = page.title();
    console.log('Page Title is : ', pagetitle);
    await expect(page).toHaveTitle('STORE');

    const pageurl = page.url();
    console.log('Page Title is : ', pageurl);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})
