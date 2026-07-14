import { test, expect } from '@playwright/test';

test ("Soft Assertion", async ({page})=>{

// Hard Assertion :  Test execution stops immediately if assertion fails.	
// Soft Assertion :  Test execution continues even if assertion fails.

    //await page.goto("https://www.demoblaze.com/index.html")
    await page.goto("https://www.demoblaze.com/index.html", {
         waitUntil: "domcontentloaded" 
        
        });


    //Hard Assertion
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();

    
    // //soft Assertion
    // await expect.soft(page).toHaveTitle("STORE123");
    // await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    // await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})