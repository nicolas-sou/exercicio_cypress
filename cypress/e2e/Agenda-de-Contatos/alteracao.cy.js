/// <reference types="cypress" />

describe("Teste de Alteração de Contato", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/;");
    });

    it("Deve alterar um contato existente", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').first().click();
        cy.get('[type="text"]').clear().type("Novo Contato Atualizado");
        cy.get('[type="email"]').clear().type("atualizadocontato@examplo.com");
        cy.get('[type="tel"]').clear().type("11957395020");
        cy.get('.alterar').click();
    });
    
});
