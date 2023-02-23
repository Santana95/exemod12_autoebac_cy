/// <reference types="cypress" />
import enderecoPage from "../support/page_objects/endereco.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.viewport(1600, 900);
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/');

        //Adicionando o 1º produto:
        cy.addProdutos('Abominable Hoodie', 'M', 'Green', 1);
        cy.get('.woocommerce-message').contains('“Abominable Hoodie” foi adicionado no seu carrinho.');

        //Adicionando o 2º produto:
        cy.addProdutos('Abominable Hoodie', 'S', 'Blue', 1);
        cy.get('.woocommerce-message').contains('“Abominable Hoodie” foi adicionado no seu carrinho.');

        //Adicionando o 3º produto:
        cy.addProdutos('Abominable Hoodie', 'XL', 'Red', 1);
        cy.get('.woocommerce-message').contains('“Abominable Hoodie” foi adicionado no seu carrinho.');

        //Adicionando o 4º produto:
        cy.addProdutos4page('Balboa Persistence Tee', 'XS', 'Orange', 1);
        cy.get('.woocommerce-message').contains('“Balboa Persistence Tee” foi adicionado no seu carrinho.');

        //Preenchendo o formulário de checkout:
        enderecoPage.preencherFormularioCheckout('Ian', 'Santana', 'Google', 'Brasil', 'Rua 01', '123', 'Sorocaba' , 'São Paulo', '18031060', '11987654321', 'iansantana02@gmail.com');
        cy.get('[class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"]').should('contain', 'Obrigado. Seu pedido foi recebido.');
    });
});