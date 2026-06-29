import { test, expect } from '@playwright/test';

test("Handle multiselectdropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple option from multi select dropdown 
    //await page.selectOption("#colors", ['Blue', 'Red', 'Yellow'])

    //Assertion
    //1) check number of option in dropdown
    //const options =  page.locator("#colors option")
    //await expect(options).toHaveCount(7);

    //2) Check number of options in dropdown using JS array
    // const options = await page.$$('#colors option')
    // await expect(options.length).toBe(7);

    //3) check presence of value in the dropdown
    const content = await page.locator("#colors").textContent()
    await expect(content.includes('Black')).toBeTruthy();
    await page.waitForTimeout(5000);
})