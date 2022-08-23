import { testUser } from '../data/users';

export async function getSessionId(request) {
  const loginResponse = await request.post('/login', {
    data: {
      username: testUser.username,
      password: testUser.password,
      type: 'LOGIN',
    },
  });
  const sessionId = loginResponse.headers()['set-cookie'].split(';')[0];
  return sessionId;
}

export async function loggedInUserApiContext(playwright, request) {
  const sessionId = await getSessionId(request);
  playwright.request.newContext({
    extraHTTPHeaders: {
      Cookie: sessionId,
    },
  });
}
