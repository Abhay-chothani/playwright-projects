import { test, expect } from '@playwright/test';

test('Locators', async ({page}) =>{
    await page.goto("https://www.demoblaze.com/");

    //Click on login button - property 
    // await page.locator('id=login2').click()  
    await page.click('id=login2')
    // Provide username - css
    // await page.locator('#loginusername', 'pavanol')
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername', 'pavanol')

    //provide password - css
    await page.fill("input[id='loginpassword']", 'test@123')

    //click on login button - XPath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence - XPath
    const logoutlink = page.locator("//a[normalize-space()='Log out']")
    await expect(logoutlink).toBeVisible();
    await page.close();   
}

)