# QA Automation Assignment using Cypress

## Project Overview

This project demonstrates automated regression testing of the SauceDemo web application using the Cypress automation framework. The objective of this assignment is to automate core user functionalities, execute regression tests, and analyze the test results.

---

## Application Under Test

**Website:** https://www.saucedemo.com/

---

## Automation Framework

- Framework: Cypress
- Language: JavaScript
- IDE: Visual Studio Code
- Runtime: Node.js
- Browser: Google Chrome

---

## Project Structure

```
QA_Automation_Assignment
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   └── logout.cy.js
│   ├── fixtures
│   └── support
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Automated Test Cases

| Test Case | Status |
|-----------|--------|
| Valid Login | ✅ Passed |
| Invalid Login | ✅ Passed |
| Add Product to Cart | ✅ Passed |
| Remove Product from Cart | ✅ Passed |
| Complete Checkout | ✅ Passed |
| Logout | ✅ Passed |

---

## Test Execution Result

- Total Spec Files: 4
- Total Test Cases: 6
- Passed: 6
- Failed: 0

Overall Result:

**All automated test cases passed successfully.**

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run Cypress Test Runner

```bash
npx cypress open
```

Run all tests in headless mode

```bash
npx cypress run --browser chrome
```

---

## Benefits of Cypress

- Fast execution
- Easy setup
- Automatic waiting
- Built-in assertions
- Real browser testing
- Detailed test reports
- Excellent debugging support

---

## Conclusion

The regression testing suite was successfully automated using Cypress. All six automated test cases executed successfully without any failures, demonstrating the stability of the selected application.

---

**Developed By**

Muhammad Ferooz

QA Automation Assignment

2026