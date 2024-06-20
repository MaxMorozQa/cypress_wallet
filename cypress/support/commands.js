// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://test.pro.selfwork.ru');
    cy.get('input.sc-pGacB.hTtqBA').type('9654343434');
    cy.get('input.sc-jSgvzq.jxlYeS').type('Lhb-ytp-DUL-VT6');
    cy.get('p.sc-fodVek.gZEljK').click();
    cy.contains('Код авторизации').should('be.visible');
    cy.get(':nth-child(1) > .sc-iqHYmW').type(1);
    cy.get(':nth-child(2) > .sc-iqHYmW').type('2');
    cy.get(':nth-child(3) > .sc-iqHYmW').type('3');
    cy.get(':nth-child(4) > .sc-iqHYmW').type('4');
    cy.contains('Прием денег').should('be.visible');
})