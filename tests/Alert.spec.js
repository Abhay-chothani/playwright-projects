import { test, expect } from '@playwright/test';

test.skip('Alert  with Ok', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert'); 
        expect(dialog.message()).toContain("I am a JS Alert")
        await dialog.accept()
    })

    await page.click("//button[normalize-space()='Click for JS Alert']");
    await page.waitForTimeout(5000);


})



test.skip('Confirmation Dialog-alert with OK and Cancel', async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm'); 
        expect(dialog.message()).toContain("I am a JS Confirm")
        await dialog.accept() // close by using ok byutton
        //await dialog.dismiss() // close by using cancel button 
    
    })

    await page.click("//button[normalize-space()='Click for JS Confirm']");
    await expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")


    await page.waitForTimeout(5000);


})



test('Prompt Dialog', async ({ page }) => {
    //test
    //add test


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt'); 
        expect(dialog.message()).toContain("I am a JS prompt");
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept('Abhay Chothani'); // close by using ok byutton
        //await dialog.dismiss() // close by using cancel button 
    
    })

    await page.click("//button[normalize-space()='Click for JS Prompt']");
    await expect(page.locator("//p[@id='result']")).toHaveText("You entered: Abhay Chothani")


    await page.waitForTimeout(5000);


})