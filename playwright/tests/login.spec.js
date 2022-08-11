// @ts-check
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("should see log in error on invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin("test", "test");
  await expect(loginPage.loginError).toBeVisible();
});
