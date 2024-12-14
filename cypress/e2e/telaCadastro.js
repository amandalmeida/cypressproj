
describe('Tela Cadastro', () => {
    it('Cadastra User Admin Sucesso', () => {
        criarUserAdm("Aureliano","lianoadm@gmail.com", "123");
        criarUser("Arcadio", "arcadio@gmail.com", "123");
    });

    it('Use Email ja cadastrado', () => {
        criarUserAdm("Aureliano","lianoadm@gmail.com", "123");
        criarUser("Arcadio", "arcadio@gmail.com", "123");
    });

    it('User ampo sem preencher', () => {
        criarUserAdm("Aureliano","lianoadm@gmail.com", "123");
        criarUser("Arcadio", "arcadio@gmail.com", "123");
    });

    it('User nome invalido', () => {
        criarUserAdm("Aureliano","lianoadm@gmail.com", "123");
        criarUser("Arcadio", "arcadio@gmail.com", "123");
    });

    it('User email invalido', () => {
        criarUserAdm("Aureliano","lianoadm@gmail.com", "123");
        criarUser("Arcadio", "arcadio@gmail.com", "123");
    });

  });







  
  function criarUser(nome, email,senha) {
        cy.visit('https://front.serverest.dev/login');
            
        cy.contains("Cadastre-se").click();
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);
        cy.contains('button', 'Cadastrar').click();
  }

  function criarUserAdm(nome, email, senha) {
    
        cy.visit('https://front.serverest.dev/login');
        
        cy.contains("Cadastre-se").click();
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="password"]').type(senha);
        cy.get('#administrador').click();
        cy.contains('button', 'Cadastrar').click();
       
    
  }

  



//<button data-testid="entrar" type="submit" class="btn btn-primary">Entrar</button>