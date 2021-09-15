/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('test url works', () => {
        cy.visit('http://localhost:4200/');
    });
    it('test create button exists', () => {
        cy.get('[data-cy=add-product]').click();
    });
});
