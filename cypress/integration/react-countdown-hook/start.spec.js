context('react-use-countdown – start', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should start timer', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(11 * 1000);
    cy.get('#time-left').should('contain', '0.00');
  });

  it('should restart timer with the same value if start is clicked while counting', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');
  });
});
