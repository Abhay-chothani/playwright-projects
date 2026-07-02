import { test, expect } from '@playwright/test';


// test('Handling Table', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     const table = await page.locator("#productTable")

//     // 1) total number of row & column
//     const columns = await table.locator("thead tr th")
//     console.log("Number of column", await columns.count())

//     const rows = await table.locator("tbody tr")
//     console.log("Number of row", await rows.count())

//     expect(await columns.count()).toBe(4)
//     expect(await rows.count()).toBe(5)


//     // 2) select checkbox for Smartwatch
//     // const matchrow =  rows.filter({
//     //         has: page.locator('td'),
//     //         hasText: "Smartwatch"
//     //     })
//     //     await matchrow.locator('input').check()

//     // 3) select multiple products by reusable function
//     // await selectProduct(rows,page,"Smartphone")
//     // await selectProduct(rows,page,"Tablet")
//     // await selectProduct(rows,page,"Wireless Earbuds")


//     // 4) print all product detail using loop
//     // for (let i = 0; i < await rows.count(); i++) {
//     //     const row = rows.nth(i);
//     //     const tds = row.locator("td")
//     //     for (let j = 0; j < await tds.count()-1; j++) {

//     //         console.log(await tds.nth(j).textContent())
//     //     }
//     // }

//     // 5) read data from all pages in the table 
//     const pages = await page.locator(".pagination li a")
//     console.log("Number of pages in a table :", await pages.count())


//     for (let p = 0; p < await pages.count(); p++) {
//         if (p > 0) {
//             await pages.nth(p).click()
//         }
//         for (let i = 0; i < await rows.count(); i++) {
//             const row = rows.nth(i);
//             const tds = row.locator("td")
//             for (let j = 0; j < await tds.count() - 1; j++) {

//                 console.log(await tds.nth(j).textContent())
//             }

//         }
//         await page.waitForTimeout(3000)
//     }

//     await page.waitForTimeout(3000)

// })





test('Handling Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    const pages = page.locator('.pagination li a');

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    const pageCount = await pages.count();

    for (let p = 0; p < pageCount; p++) {

        if (p > 0) {
            await pages.nth(p).click();
            await expect(rows.first()).toBeVisible();
        }
        
        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {

            const tds = rows.nth(i).locator('td');
            const colCount = await tds.count();

            for (let j = 0; j < colCount - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
});

async function selectProduct(rows, page, name) {
    const matchrow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchrow.locator('input').check()

}