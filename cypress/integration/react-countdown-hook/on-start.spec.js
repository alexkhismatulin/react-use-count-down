context('react-use-countdown – on start', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should trigger on start', () => {
    cy.get('#start').click();
    cy.get('#times-up').should('not.exist');

    cy.wait(11 * 1000);
    cy.get('#times-up').should('contain', 'Finished');

    cy.get('#start').click();
    cy.wait(1 * 1000);
    cy.get('#times-up').should('not.exist');
  });

});
