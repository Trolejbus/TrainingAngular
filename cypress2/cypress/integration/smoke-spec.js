/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('test url works', () => {
        cy.visit('http://localhost:4200/');
    });
});
