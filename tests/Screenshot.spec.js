import { test, expect } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
    await page.goto("https://gymnation.com/en-ae");
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})
});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto("https://gymnation.com/en-ae");
    //await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png',fullPage:true})
    await page.screenshot({path:'tests/Screenshots/FullPage.png',fullPage:true})
})

test('Element Screenshot', async ({ page }) => {
    await page.goto("https://gymnation.com/en-ae");
    await page.locator("(//div[@class='owl-item active'])[3]").screenshot({path:'tests/Screenshots/GymInDubai.png'})
    
})


// test.only('Element Screenshot', async ({ page }) => {
//     await page.goto("https://gymnation.com/en-ae");
//     await page.locator("(//div[@class='owl-item active'])[3]").screenshot({path:'tests/Screenshots/GymInDubai.png'})

// })