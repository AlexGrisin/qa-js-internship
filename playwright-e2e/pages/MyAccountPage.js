const { expect } = require('@playwright/test');

exports.MyAccountPage = class MyAccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName = page.locator('[data-test=sidenav-username]');
    this.logOutLink = page.locator('[data-test=sidenav-signout]');
  }
};
