const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');

test('should log in', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: testUser.username,
      password: testUser.password,
      type: 'LOGIN',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();
});

test('should fail log in on invalid credentials', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: nonExistingUser.username,
      password: nonExistingUser.password,
      type: 'LOGIN',
    },
  });
  expect(loginResponse.ok()).toBeFalsy();
});
