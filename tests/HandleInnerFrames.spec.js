import { test, expect } from '@playwright/test';

// test('Inner frames', async ({ page }) => {
//     await page.goto("https://ui.vision/demo/webtest/frames/");

//     //total frame
//     // const alframes = await page.frames();
//     // console.log("Number of frames : ",alframes.length)
//     await page.waitForLoadState();


//     const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' });
//     //frmae3.locator("input[name='mytext3']").fill('welcome');

//     //nested frame
//     const childframe = await frame3.childFrames()
//     await childframe[0].locator("//*[@id='i6']/div[3]/div").check()
//     //await childframe[0].getByLabel('I am a human').check();

// })
//-------------------------------------------------------------------------------------------------------
test('Inner frames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const googleForm = page
    .frameLocator("frame[src='frame_3.html']")
    .frameLocator("iframe");

  await googleForm.locator('#i6').click();
});
//-------------------------------------------------------------------------------------------------------




// import { test, expect } from '@playwright/test';

// test('Inner frames', async ({ page }) => {
//   await page.goto("https://ui.vision/demo/webtest/frames/");

//   const frame3 = page.frameLocator("frame[src='frame_3.html']");

//   const childFrame = frame3.frameLocator("iframe");

//   await childFrame.locator("//*[@id='i6']/div[3]/div").check();
// });