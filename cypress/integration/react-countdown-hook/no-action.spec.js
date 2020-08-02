context('react-use-countdown – no action', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should show 0 if not started', () => {
    cy.get('#time-left').should('contain', '0.00');
  });
});
