const request = require('supertest')('http://localhost:3001');
const expect = require('chai').expect;

const testUser = { username: 'Katharina_Bernier', password: 's3cret' };
const nonExistingUser = {
  username: 'invalid_username',
  password: 'invalid_password',
};

describe('login', function () {
  it('should log in', async function () {
    const response = await request.post('/login').send({
      username: testUser.username,
      password: testUser.password,
      type: 'LOGIN',
    });

    expect(response.status).to.eql(200);
  });

  it('should fail log in on invalid credentials', async function () {
    const response = await request.post('/login').send({
      username: nonExistingUser.username,
      password: nonExistingUser.password,
      type: 'LOGIN',
    });

    expect(response.status).to.eql(401);
  });
});
