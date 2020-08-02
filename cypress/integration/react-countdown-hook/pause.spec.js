context('react-use-countdown – pause and resume', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should pause timer', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#pause').click();
    cy.wait(11 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');
  });

  it('should not have any effect after pausing if timer is elapsed or not started', () => {
    cy.get('#pause').click();
    cy.wait(1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(11 * 1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#pause').click();
    cy.wait(1000);
    cy.get('#time-left').should('contain', '0.00');
  });

  it('should resume timer', () => {
    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(5 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#pause').click();
    cy.wait(6 * 1000);
    cy.get('#time-left').should('not.contain', '0.00');
    cy.get('#time-left').should('not.contain', '10.00');

    cy.get('#resume').click();
    cy.wait(6 * 1000);
    cy.get('#time-left').should('contain', '0.00');
  });

  it('should not have any effect after resuming if timer is elapsed or not started', () => {
    cy.get('#resume').click();
    cy.wait(1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#start').click();
    cy.get('#time-left').should('contain', '10.00');

    cy.wait(11 * 1000);
    cy.get('#time-left').should('contain', '0.00');

    cy.get('#resume').click();
    cy.wait(1000);
    cy.get('#time-left').should('contain', '0.00');
  });
});
