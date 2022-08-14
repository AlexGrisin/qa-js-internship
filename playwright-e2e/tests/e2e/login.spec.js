// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');

test('should log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);
});

test('should see log in error on invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(nonExistingUser.username, nonExistingUser.password);
  await expect(loginPage.loginError).toBeVisible();
});
