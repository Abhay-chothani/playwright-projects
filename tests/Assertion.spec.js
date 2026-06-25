import { test, expect } from '@playwright/test';


test('AssertionTest', async ({ page }) => {

    //open app url
    await page.goto('https://www.girirajdigital.com/', { 
        waitUntil: 'domcontentloaded'
    })

    // 1) pages has URL
    await expect(page).toHaveURL('https://www.girirajdigital.com/')

    //2) Page has title
    await expect(page).toHaveTitle('Enterprise Software Development Company | GIRIRAJ DIGITAL')

    //3) element is visible
    const logoelement = await page.locator('.navbar-brand')
    await expect(logoelement).toBeVisible();

    //4) Control is enable
    const viewbutton = await page.locator('.navigation')
    await expect(viewbutton).toBeEnabled()





})

