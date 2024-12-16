

describe('Teste de API com Cypress', () => {

  it('Login de usuário', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev//login', 
      body: { 

        email:"lianoadm@gmail.com",
        password:"123",
    },
    }).then((response) => {
     expect(response.status).to.eq(200);
     cy.log(response.body);
     const token = response.body.token;
     Cypress.env('authToken', token); 
     cy.log(`Token recebido: [${token}]`);

    });
  });

  it('Deve retornar produto', () => {
    cy.request('GET', 'https://serverest.dev//produtos/BeeJh5lz3k6kSIzA').then((response) => {
      expect(response.status).to.eq(200); 
     
    });
  });

  it('Consulta produto inválido', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev//produtos/BeeJh5lz3k6kSIqA',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); 
    });
    

    });

    it('Login de usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev//login', 
        body: { 

          email:"lianoadm@gmail.com",
          password:"123",
      },
      }).then((response) => {
       expect(response.status).to.eq(200);
       cy.log(response.body)
      });
    });

    it('Login incorreto', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev//login',
          body: {
  
          email: 'ursula@gmail.com',
          password: '123',
          },
          failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
    
  
  it('Cadastrar Usuário', () => {
      cy.request({
        method: 'POST',
        url: "https://serverest.dev/usuarios",
          body: {
          nome: "remedios",
          email: "remedios@gmail.com",
          password: "123",
          administrador: "true",
          },
          
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });

    it('Cadastrar Usuário Inválido', () => {
      cy.request({
        method: 'POST',
        url: "https://serverest.dev/usuarios",
          body: {
          nome: "Pietro",
          email: "brando@gmail.com",
          password: "123",
          administrador: "true",
          },
          failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  
    it('Cadastrar produto', () => {
      const token = Cypress.env('authToken');    
          cy.request({
            method: 'POST',
            url: 'https://serverest.dev//produtos/',
              body: {
                  nome: 'Sacola',
                  preco: '10',
                  descricao: 'Para guardar coisinhas',
                  quantidade: '200',
              },
              
              headers: {
              Authorization: 'Bearer [${token}]',
              
            },
          }).then((response) => {
            expect(response.status).to.eq(201);
          });
        });
      });

  
    
  

  



  

