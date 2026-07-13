const { test, expect } = require('@playwright/test');

// NOTE: gymnation.com is a client-side rendered, multi-step membership wizard
// (Select Gym -> Select Membership -> Join/Payment), not a traditional cart checkout.
// The page renders 3 parallel forms (#joinform, #registerform, #freeTrailform),
// so any text-based locator must be scoped to the relevant form container to
// avoid strict-mode violations (duplicate text across forms).
// The wizard is also sequential: the Join form's validation only becomes
// reachable/active after a location AND a membership plan have been selected.
//
// Remaining TODOs (not yet verified against live DOM):
//   - Personal detail input locators (Step 3) - placeholder-based, unconfirmed
//   - Payment iframe (Step 4) - provider not yet confirmed (Adyen/Stripe/etc.)

const CHECKOUT_URL = 'https://gymnation.com/en-ae/gymsnearme/gymmembership/';

const TEST_USER = {
  firstName: 'John',
  lastName: 'Doe',
  email: `test.user.${Date.now()}@example.com`,
  phone: '501234567',
};

// Reusable helper: completes Step 1 (location) + Step 2 (membership),
// since both are prerequisites for the Join form to become active.
async function selectLocationAndMembership(page) {
  await page.getByRole('heading', { name: 'Mirdif', exact: true })
    .locator('..')
    .getByRole('button', { name: 'Choose Location' })
    .click();

  // FIX: The original `[class*="membership"]` locator matched a hidden,
  // unrelated mobile helper span (`selected-location mobi d-none
  // location-membership`), not an actual plan card - hence the timeout.
  // The real plan cards expose accessible "Choose <Plan>" buttons.
  await page.getByRole('button', { name: 'Choose Signature' }).click();
}

test.describe('GymNation Membership Checkout Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(CHECKOUT_URL);
    // Dismiss cookie/consent banner if present
    const acceptCookies = page.getByRole('button', { name: /accept/i });
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }
  });

  test('should complete membership signup flow through to payment step', async ({ page }) => {
    // ---- Step 1: SELECT GYMNATION (location) & Step 2: Select Membership ----
    await expect(page.getByText('SELECT GYMNATION').first()).toBeVisible();
    await selectLocationAndMembership(page);

    // ---- Step 3: Join Gymnation (personal details) ----
    await expect(page.getByText('Join Gymnation').first()).toBeVisible();

    // Scope all Step 3 interactions to the Join form specifically, since
    // Register/Free Trial forms render in parallel with duplicate fields/text.
    const joinForm = page.locator('#joinform');

    // TODO: Confirm exact input locators (name/email/phone fields)
    await joinForm.getByPlaceholder(/first name/i).fill(TEST_USER.firstName);
    await joinForm.getByPlaceholder(/last name/i).fill(TEST_USER.lastName);
    await joinForm.getByPlaceholder(/email/i).fill(TEST_USER.email);
    await joinForm.getByPlaceholder(/mobile|phone|number/i).fill(TEST_USER.phone);

    // Gender selection
    await joinForm.getByText('Male', { exact: true }).click();

    // Agree to terms checkbox
    const termsCheckbox = joinForm.getByRole('checkbox');
    if (await termsCheckbox.isVisible().catch(() => false)) {
      await termsCheckbox.check();
    }

    // Proceed
    await joinForm.getByText('continue', { exact: false }).click();

    // ---- Step 4: PAYMENT ----
    await expect(page.getByText('PAYMENT').first()).toBeVisible();

    // Choose Credit/Debit Card payment method
    await page.getByText('Credit/Debit Card').click();

    // NOTE: Card number/expiry/CVV fields are typically inside a secure
    // third-party iframe (e.g. Adyen/Stripe). If so, use frameLocator:
    // const cardFrame = page.frameLocator('iframe[name*="card"]');
    // await cardFrame.getByPlaceholder('Card number').fill('4111111111111111');
    // This is intentionally left as a TODO pending confirmation of the payment provider.

    // ---- Verification ----
    // Verify the Membership Summary panel reflects the selection made
    const summary = page.getByText('Membership Summary').first();
    await expect(summary).toBeVisible();
    await expect(page.getByText('total due today')).toBeVisible();
  });

  test('should show validation errors when continuing with empty required fields', async ({ page }) => {
    // FIX: The Join form's "continue" button is not reachable/active until
    // Steps 1 and 2 are completed - that's why `continueButton.isVisible()`
    // was silently resolving false, the click never fired, and the
    // validation spans stayed hidden. Complete the prerequisite steps first.
    await selectLocationAndMembership(page);

    // FIX: Scope to #joinform - the page renders 3 parallel forms
    // (#joinform, #registerform, #freeTrailform), each with identical
    // validation text, which caused a strict-mode violation on the
    // unscoped page-wide locator.
    const joinForm = page.locator('#joinform');

    await joinForm.getByText('continue', { exact: false }).click();

    await expect(joinForm.getByText('Please enter a valid number')).toBeVisible();
    await expect(joinForm.getByText('Please select gender')).toBeVisible();
  });

});