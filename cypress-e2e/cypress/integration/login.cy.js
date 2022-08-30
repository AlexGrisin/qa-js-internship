describe('User login', () => {
  it('should log in', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        username: 'Katharina_Bernier',
        password: 's3cret',
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
        username: 'Katharina_Bernier',
        password: 'invalid_password',
        type: 'LOGIN',
      },
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.eq(401);
    });
  });
});
