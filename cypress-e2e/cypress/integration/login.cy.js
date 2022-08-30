describe('User login', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  it('should log in', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        username: users.testuser.username,
        password: users.testuser.password,
        type: 'LOGIN',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });

  it('should log in', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        username: users.invaliduser.username,
        password: users.invaliduser.password,
        type: 'LOGIN',
      },
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(401);
    });
  });
});
