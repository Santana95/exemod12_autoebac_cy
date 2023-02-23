Cypress.Commands.add('login',(usuario, senha) => {
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.woocommerce-form > .button').click();
});

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
});

Cypress.Commands.add('addProdutos4page', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('.next').click();
    cy.get('.next').click();
    cy.get('.next').click();
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
});