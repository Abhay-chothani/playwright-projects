import { test, expect } from '@playwright/test';


test('Dran and Drop', async ({ page }) => {

    // await page.goto("https://demoqa.com/droppable")

    // const dragme = await page.locator("#draggable");
    // const  drophere = await page.locator("#droppable");


    // //approach 1
    // await dragme.hover()
    // await page.mouse.down()

    // await drophere.hover()
    // await page.mouse.up()

    // await page.waitForTimeout(5000);



    // await page.goto("https://demoqa.com/droppable", {
    //     waitUntil: 'domcontentloaded',
    //     timeout: 60000,
    // });

    // const dragme = page.locator("#draggable");
    // const drophere = page.locator("#droppable");

    // // Before Drop
    // await expect(drophere).toHaveText("Drop Here");

    // // Approach 1
    // await dragme.hover();
    // await page.mouse.down();

    // await drophere.hover();
    // await page.mouse.up();

    // // After Drop
    // await expect(drophere).toHaveText("Dropped!");

    // await page.waitForTimeout(5000);

    //-----------------------------------------------------------------

    await page.goto("https://demoqa.com/droppable")

})