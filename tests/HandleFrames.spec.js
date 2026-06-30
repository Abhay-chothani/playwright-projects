import { test, expect } from '@playwright/test';

test('frames', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frame
    const alframes = await page.frames();
    console.log("Number of frames : ",alframes.length)

    // // approach 1 : using name or url
    // const frmae1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    // await frmae1.fill('[name="mytext1"]','Hello');

    // approach 2 : using frame locatior
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputbox.fill("Hello");

    await page.waitForTimeout(5000);
})