

describe('Login', () => {

    it('Tela Login Sucesso', () => {
        fazerLogin("arcadio@gmail.com", "123");
        cy.url().should("eq","https://front.serverest.dev/home");
});

    it('Tela Login email invalido', () => {
        fazerLogin("212324ad","123"); 
       
     });
    
     it('Tela login email inexistente', () => {
        fazerLogin("amaranta@gmail.com","123"); 
        cy.get('.alert').should('have.class', 'alert alert-secondary alert-dismissible');


    }); 
    it('Tela login sem senha', () => {
        fazerLogin("amaranta@gmail.com"," "); 
        cy.get('.alert').should('have.class', 'alert alert-secondary alert-dismissible');

    }); 
        

}); 

    
    it('Tela login senha incorreta', () => {
    fazerLogin("arcadio@gmail.com","2334545"); 
    cy.get('.alert').should('have.class', 'alert alert-secondary alert-dismissible');
}); 











function fazerLogin(email, senha) {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(senha)
    cy.contains('button', 'Entrar').click();

} 