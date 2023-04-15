Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('input[id="firstName"]').type('Nathália')
    cy.get('input[id="lastName"]').type('Souza')
    cy.get('input[id="email"]').type('nathalia@testemail.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
    
})