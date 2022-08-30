const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

test.beforeAll(async ({ playwright, request }) => {
  await loggedInUserApiContext(playwright, request, testUser);
});

test('should get contacts', async ({ request }) => {
  const contactsResponse = await request.get('/transactions/contacts');
  let data = await contactsResponse.json();

  expect(contactsResponse.ok()).toBeTruthy();
  expect(data.results).toBeDefined();
});
