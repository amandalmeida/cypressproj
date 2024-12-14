

describe('Login', () => {

    it('Tela Login Sucesso', () => {
        fazerLogin("arcadio@gmail.com", "123");
});

    it('Tela Login email invalido', () => {
        fazerLogin("212324ad","123"); 
     });
    
    it('Tela login email inexistente', () => {

}); 
    
    it('Tela login senha incorreta', () => {

    }); 


});








function fazerLogin(email, senha) {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(senha)
    cy.contains('button', 'Entrar').click();

}