/// <reference types="cypress" />

describe("Teste de Remoção de Contato", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/;");
    });

    it("Deve remover um contato existente", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    })
})