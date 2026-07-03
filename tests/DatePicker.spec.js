import { test, expect } from '@playwright/test';

test("DatePicker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
    }
    )

    // await page.fill("#datepicker", "10/06/2001")

    //Date picker 
    const year = "2026"
    const month = "October"
    const date = "6"

    // Open Date Picker
    await page.locator("#datepicker").click(); //open calendar

    // Wait until calendar is visible
    await expect(page.locator('.ui-datepicker')).toBeVisible();


    while (true) {
        const currentyear = (await page.locator(".ui-datepicker-year").textContent()).trim();
        const currentmonth = (await page.locator(".ui-datepicker-month").textContent()).trim();

        if (currentyear === year && currentmonth === month) {
            break
        }
         await page.locator("[title ='Next']").click()  //Next
        //await page.locator('.ui-datepicker-next').click();
        // Wait for calendar to update
        await page.waitForTimeout(300);
    }
    // Select the day
     const dates = await page.$$("//a[@class='ui-state-default']")

    //await page.locator('.ui-datepicker-calendar td a').getByText(day, { exact: true }).click();


    //date selection using loop
    // for (const dt of dates) {
    //     if (await dt.textContent() == date) {
    //         await dt.click();
    //         break;
    //     }
    // }

    //date selection without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

});