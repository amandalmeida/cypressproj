describe('Cadastrar Produtos', () => {

    
        
      
    
    it('Cadastrar Sucesso', () => {
        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid="email"]').type("lianoadm@gmail.com");
        cy.get('[data-testid="senha"]').type("123");
        cy.contains('button', 'Entrar').click();
        cy.get('[data-testid="cadastrarProdutos"]').click();
    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

}) 



    function cadastrarProduto(nome, preco, descricao, qtdade) {
   
        cy.get('[data-testid="cadastrarProdutos"]').click();
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="preco"]').type(preco);
        cy.get('[data-testid="descricao"]').type(descricao);
        cy.get('[data-testid="quantity"]').type(qtdade);
        //cy.get('[data-testid="imagem"]').type("https://example.com/imagem1.jpg"); 
        cy.get('[data-testid="cadastarProdutos"]').click();
    
    }

    
    it('Cadastrar Nome Invalido', () => {

        
        
        cy.get('[data-testid="preco"]').type(2);
        cy.get('[data-testid="descricao"]').type(2);
        cy.get('[data-testid="quantity"]').type(2);
        cy.get('[data-testid="cadastarProdutos"]').click();
        cy.get('.alert > :nth-child(2)').should('have.text','Nome é obrigatório');
     
    });