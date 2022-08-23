export async function getSessionId(request, user) {
  const loginResponse = await request.post('/login', {
    data: {
      username: user.username,
      password: user.password,
      type: 'LOGIN',
    },
  });
  const sessionId = loginResponse.headers()['set-cookie'].split(';')[0];
  return sessionId;
}

export async function loggedInUserApiContext(playwright, request, user) {
  const sessionId = await getSessionId(request, user);
  playwright.request.newContext({
    extraHTTPHeaders: {
      Cookie: sessionId,
    },
  });
}
