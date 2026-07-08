const { test, expect } = require('@playwright/test');

// Valid credentials for the OrangeHRM public demo site
const LOGIN_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const VALID_USERNAME = 'Admin';
const VALID_PASSWORD = 'admin123';

test.describe('OrangeHRM Login Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await expect(page.locator('input[name="username"]')).toBeVisible();
  });

  test('should log in with valid credentials and land on the dashboard', async ({ page }) => {
    // Step 1: Enter valid username
    await page.locator('input[name="username"]').fill(VALID_USERNAME);

    // Step 2: Enter valid password
    await page.locator('input[name="password"]').fill(VALID_PASSWORD);

    // Step 3: Click Login button
    await page.locator('button[type="submit"]').click();

    // Step 4: Verify dashboard page is displayed
    await expect(page).toHaveURL(/.*\/dashboard\/index/, { timeout: 10000 });

    const dashboardHeader = page.locator('h6.oxd-text--h6', { hasText: 'Dashboard' });
    await expect(dashboardHeader).toBeVisible();
    await expect(dashboardHeader).toHaveText('Dashboard');
  });

  test('should show an error message with invalid credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('wrongPassword123');
    await page.locator('button[type="submit"]').click();

    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid credentials');
  });

  test('should require both username and password', async ({ page }) => {
    await page.locator('button[type="submit"]').click();

    const requiredMessages = page.locator('.oxd-input-field-error-message');
    await expect(requiredMessages).toHaveCount(2);
    await expect(requiredMessages.first()).toHaveText('Required');
  });

});