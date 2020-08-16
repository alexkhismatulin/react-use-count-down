context('react-use-countdown – restart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should restart timer with a given value', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(11 * 1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#restart').click();
    cy.get('#time-left').should('contain', '4.20');
  });

  it('should restart timer with a given value if a time is still running', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#restart').click();
    cy.get('#time-left').should('contain', '4.20');
  });

  it('should end up with 0 event if time left is less than interval', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#restart').click();
    cy.get('#time-left').should('contain', '4.20');

    cy.wait(6 * 1000);
    cy.get('#time-left').should('contain', '0.00');
  });
});
