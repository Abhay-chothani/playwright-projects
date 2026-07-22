import { test, expect } from '@playwright/test';


test('Test1@reg', async ({ page }) => {
    console.log("this is my test1...")
});
test('Test2@reg', async ({ page }) => {
    console.log("this is my test2...")
});
test('Test3@smoke', async ({ page }) => {
    console.log("this is my test3...")
});
test('Test4@smoke', async ({ page }) => {
    console.log("this is my test4...")
});
test('Test5@smoke@sanity', async ({ page }) => {
    console.log("this is my test5...")
});

//npx playwright test tests/Tags.spec.js --project chromium --headed --grep @smoke --grep-invert @sanity : exclude sanity only smoke tage test run