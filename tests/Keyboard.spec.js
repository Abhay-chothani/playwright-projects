import { test, expect } from '@playwright/test';


test('Keyboard Action', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");
    // await page.locator('name="text1"').fill("Welcome to automation")     aa bhi lkhi ski or below line also 
    await page.type('[name="text1"]', 'Welcome to automation')
    //ctrl + A - Select a text
    await page.keyboard.press("Control+A");
    //ctrl + C - Copy the text
    await page.keyboard.press("Control+C");
    //Tab
    await page.keyboard.down('Tab');
    //ctrl + V 
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(5000);

})