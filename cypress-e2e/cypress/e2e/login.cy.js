describe('Login spec', () => {
  beforeEach(function () {
    cy.fixture('users').then(users => {
      this.users = users;
    });
    cy.visit('/');
  });

  it('should log in', function () {
    cy.login(this.users.testuser.username, this.users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(this.users.testuser.username);
  });

  it('should see log in error on invalid credentials', function () {
    cy.login(this.users.invaliduser.username, this.users.invaliduser.password);
    cy.get('.MuiAlert-message').should('exist');
  });
});
