Cypress.Commands.add('autenticarConPIN', (pin) => {
    cy.get('input[type="password"], input[type="tel"], input')
      .should('be.visible')
      .type(pin);
    cy.contains('button', 'Ingresar').click();
  });