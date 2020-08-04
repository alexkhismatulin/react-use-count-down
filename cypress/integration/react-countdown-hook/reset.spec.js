context('react-use-countdown – reset', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should reset time to zero', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#reset').click();
    cy.get('#time-left').should('contain', '0.00');
  });

  it('should not have any effect if timer is elapsed', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(11 * 1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#reset').click();
    cy.get('#time-left').should('contain', '0.00');
  });
});
