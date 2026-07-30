[README.md](https://github.com/user-attachments/files/30266528/README.md)
# 🎭 Playwright Projects

![Playwright](https://img.shields.io/badge/Playwright-Automation-2EAD33?logo=playwright\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js\&logoColor=white)

A personal learning repository for exploring **Playwright with JavaScript**. This project contains hands-on examples, practice tests, and reusable patterns covering the core concepts of modern web automation and UI testing.

**Repository:** https://github.com/Abhay-chothani/playwright-projects

---

## 🚀 What I’ve Practiced So Far

### Core Playwright

* Browser launch & navigation
* Page interactions (`click`, `fill`, `press`, `hover`)
* Auto-waiting behavior
* Assertions with `expect`

### Locators

* `getByRole()`
* `getByText()`
* `getByLabel()`
* CSS locators
* XPath locators

### Test Structure

* `test.describe()`
* `beforeEach`, `afterEach`
* Test tagging (`@smoke`, `@regression`)
* Annotations: `only`, `skip`, `fail`, `fixme`, `slow`

### UI Scenarios

* Login workflows
* Forms & validations
* Dropdowns & checkboxes
* Alerts & dialogs
* Frames & iframes
* Multiple tabs/windows
* File upload
* Screenshots

---

## 📂 Project Structure

```text
playwright-projects/
├── tests/                 # Practice test files
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies & scripts
└── README.md
```

---

## 🛠️ Tech Stack

* **Playwright**
* **JavaScript (ES6+)**
* **Node.js**
* **VS Code**
* **Git & GitHub**

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/Abhay-chothani/playwright-projects.git
cd playwright-projects
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/Login.spec.js
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run in UI mode

```bash
npx playwright test --ui
```

### Run tagged tests

```bash
npx playwright test --grep @smoke
```

---

## 📊 View HTML Report

After execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

---

## ✨ Sample Test

```javascript
import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#logout2')).toBeVisible();
});
```

---

## 🎯 Learning Goals

* Build a strong foundation in Playwright automation
* Write stable and maintainable tests
* Follow Playwright best practices
* Integrate tests with GitHub Actions CI/CD
* Progress from beginner to advanced automation scenarios

---

## 📚 Helpful Resources

* https://playwright.dev/docs/intro
* https://playwright.dev/docs/test-assertions
* https://playwright.dev/docs/locators

---

## 👨‍💻 Author

**Abhay Chothani**

* GitHub: https://github.com/Abhay-chothani

---

⭐ If you find this repository useful, feel free to **star the repo** and follow my Playwright learning journey!
