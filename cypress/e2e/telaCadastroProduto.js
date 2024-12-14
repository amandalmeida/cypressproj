describe('Cadastrar Produtos', () => {

    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid="email"]').type("lianoadm@gmail.com");
        cy.get('[data-testid="senha"]').type("123");
        cy.contains('button', 'Entrar').click();
      })
    
    it('Cadastrar Sucesso', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Nome Invalido', () => {

     cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Preco Invalido', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Descricao Invalida', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Quantidade Invalida', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });

    it('Cadastrar Produto Duplicado', () => {

    cadastrarProduto("Cypress: Test Automation", "10", "Cypress is the open-source and free test automation tool.", "30");
    });
});





function cadastrarProduto(nome, preco, descricao, qtdade) {
   
    cy.get('[data-testid="cadastrarProdutos"]').click();
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="preco"]').type(preco);
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(qtdade);
    //cy.get('[data-testid="imagem"]').type("https://example.com/imagem1.jpg"); 
    cy.get('[data-testid="cadastarProdutos"]').click();

}