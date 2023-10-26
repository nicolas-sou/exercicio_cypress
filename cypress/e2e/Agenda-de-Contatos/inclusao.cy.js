/// <reference types="cypress" />

describe("Teste de Inclusão de Contato", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/;");
    })
    it("Deve adicionar um novo contato", () => {
        cy.get('[type="text"]').type("Novo Contato");
        cy.get('[type="email"]').type("novocontato@examplo.com");
        cy.get('[type="tel"]').type("11954825030")
        cy.get('.adicionar').click();
        cy.contains("Novo Contato");
        cy.contains("novocontato@examplo.com");
    });
})