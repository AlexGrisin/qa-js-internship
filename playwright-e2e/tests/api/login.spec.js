const { test, expect } = require("@playwright/test");
const { testUser, nonExistingUser } = require("../../data/users");

let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: "http://localhost:3001",
    extraHTTPHeaders: {},
  });
});

test("should log in", async () => {
  const loginResponse = await apiContext.post("/login", {
    data: {
      username: testUser.username,
      password: testUser.password,
      type: "LOGIN",
    },
  });
  expect(loginResponse.ok()).toBeTruthy();
});

test("should fail log in on invalid credentials", async () => {
  const loginResponse = await apiContext.post("/login", {
    data: {
      username: nonExistingUser.username,
      password: nonExistingUser.password,
      type: "LOGIN",
    },
  });
  expect(loginResponse.ok()).toBeFalsy();
});
