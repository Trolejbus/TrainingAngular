/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('test url works', () => {
        cy.visit('http://localhost:4200/');
        cy.get('[data-cy=add-product]').click();
    });
    it('Add new product', () => {
        cy.get('[data-cy=name-input]').type('Test Name');
        cy.get('[data-cy=price-input]').type('100');
        cy.get('[data-cy=category-input]').select('Tools');
        cy.get('[data-cy=add-product-button]').click();
        cy.get('[data-cy=product-table]').contains('td', 'Test Name')
            .should('be.visible');
    });
    
});
