

describe('Tela Cadastro', () => {
    it('Cadastra User Admin Sucesso', () => {
        criarUserAdm("Aureleano","leanoadm@gmail.com", "123");
       
        cy.get('#administrador').should('be.checked');

    });

    it('Cadastra User  Sucesso', () => {
       
        criarUser("Arcadio", "arcadio@gmail.com", "123");
       
    });

    it('Use Email ja cadastrado', () => {
       
        criarUser("Arcadio Jose", "arcadio@gmail.com", "123");
        cy.get('.alert > :nth-child(2)').should('have.text','Este email já está sendo usado' );
    });

    it('User senha sem preencher', () => {
        
        cy.visit('https://front.serverest.dev/login');
            
        cy.contains("Cadastre-se").click();
        cy.get('[data-testid="nome"]').type("Rebeca");
        cy.get('[data-testid="email"]').type("rebeca@gmail.com");
        cy.contains('button', 'Cadastrar').click();
        cy.get('.alert > :nth-child(2)').should('have.text','Password é obrigatório');
    });

    it('User email invalido', () => {
        criarUserAdm("Ursula","ursula@aaa", "123");
        cy.get('.alert > :nth-child(2)').should('have.text', 'Email deve ser um email válido');
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