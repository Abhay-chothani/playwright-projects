import { test, expect } from '@playwright/test';
import { ADDRGETNETWORKPARAMS } from 'node:dns';


// test('Single File', async ({ page }) => {

//     await page.goto("https://testing.qaautomationlabs.com/file-upload.php")

//     await page.locator("#fileInput").setInputFiles('tests/Upload File/dummy.pdf');
//     await page.waitForTimeout(5000);
// })


test('Multiple File', async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload")
        .setInputFiles(['tests/Upload File/dummy.pdf',
            'tests/Upload File/order history.pdf']);

    await page.waitForTimeout(3000)
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText("dummy.pdf")
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText("order history.pdf")


    await page.waitForTimeout(3000)

    //Remove File
    await page.locator('#filesToUpload').setInputFiles([])

    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(3000)

})