describe('Cadastrar Produtos', () => {

    
        
       
      
    
    it('Cadastrar Sucesso', () => {
        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid="email"]').type("lianoadm@gmail.com");
        cy.get('[data-testid="senha"]').type("123");
        cy.contains('button', 'Entrar').click();
        cy.get('[data-testid="cadastrarProdutos"]').click();
    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Nome Invalido', () => {

        cy.get('[data-testid="cadastrarProdutos"]').click();
        
        cy.get('[data-testid="preco"]').type(2);
        cy.get('[data-testid="descricao"]').type(2);
        cy.get('[data-testid="quantity"]').type(2);
        cy.get('[data-testid="cadastarProdutos"]').click();
        cy.get('.alert > :nth-child(2)').should('have.text','Nome é obrigatório');
     
    });

    it('Cadastrar Preco Invalido', () => {

    cadastrarProduto("Cien anos de soledad", "-2", "Realismo Fantastico", "30");
    cy.get('.alert > :nth-child(2)').should('have.text', 'Preco deve ser um número positivo');
    });

    it('Cadastrar Descricao Invalida', () => {
    
        cy.get('[data-testid="cadastrarProdutos"]').click();
        cy.get('[data-testid="nome"]').type(Cien anos de soledad);
        cy.get('[data-testid="preco"]').type(20);
        cy.get('[data-testid="quantity"]').type(40); 
        cy.get('[data-testid="cadastarProdutos"]').click();
        cy.get('.alert > :nth-child(2)').should('have.text', 'Descricao não pode ficar em branco' );
    });

    it('Cadastrar Quantidade Invalida', () => {

    cadastrarProduto("Cien anos de soledad", "10", "Realismo Fantastico", "-3");
    cy.get('.alert > :nth-child(2)').should('have.text', 'Quantidade deve ser maior ou igual a 0');
    });

    it('Cadastrar Produto Duplicado', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });
    cy.get('.alert > :nth-child(2)').should('have.text', 'Já existe produto com esse nome');
});





function cadastrarProduto(nome, preco, descricao, qtdade) {
   
    
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="preco"]').type(preco);
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(qtdade);
    //cy.get('[data-testid="imagem"]').type("https://example.com/imagem1.jpg"); 
    cy.get('[data-testid="cadastarProdutos"]').click();

}