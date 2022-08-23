const { test, expect } = require('@playwright/test');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

test.beforeAll(async ({ playwright, request }) => {
  await loggedInUserApiContext(playwright, request);
});

test('should create transaction payment', async ({ request }) => {
  const paymentResponse = await request.post('/transactions', {
    data: {
      amount: '100',
      description: 'description',
      receiverId: 'qywYp6hS0U',
      senderId: 't45AiwidW',
      transactionType: 'payment',
    },
  });

  expect(paymentResponse.ok()).toBeTruthy();
});
