import { test, expect } from '@playwright/test';




test('Submit valid lead', async ({ page }) => {
  await page.goto('https://gymnation.com/en-ae');

  const form = page.locator('form.workoutlead').first();

  await expect(form).toBeVisible();


// 1. Select City
await form.locator('.city_label').click();
await form.locator('.location-text', { hasText: 'Dubai' }).click();

// 2. Wait for GymNation dropdown to become visible
await expect(form.locator('.location_label123')).toBeVisible();

// 3. Open GymNation dropdown
await form.locator('.location_label123').click();

// 4. Select Gym
await form.locator('#locations-li .location-text', {
  hasText: 'Motor City',   // Change as needed
}).click();

  // First Name
  await form.locator('#name').fill('Abhay');

  // Email
  await form.locator('#email').fill('abhaytest@gmail.com');

  // Phone
  //await form.locator('#phone1').fill('504484848');
await page
  .getByRole('textbox', { name: /PHONE/i })
  .fill('504484848');
  // Submit
  await form.locator('#btnlead').click();
  console.log(await page.locator('#phone1').count());
});