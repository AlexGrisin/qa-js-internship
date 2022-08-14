const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.signInButton = page.locator('[data-test=signin-submit]');
    this.loginError = page.locator('.MuiAlert-message');
  }

  async goto() {
    await this.page.goto('/signin');
  }

  async userLogin(username, password) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
};
