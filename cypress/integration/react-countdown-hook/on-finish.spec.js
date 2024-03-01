context('react-use-countdown – on finish', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should trigger on finish', () => {
    cy.get('#start').click();
    cy.get('#times-up').should('not.exist');

    cy.wait(11 * 1000);
    cy.get('#times-up').should('contain', 'Finished');
  });

});
