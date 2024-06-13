/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements;
const url = Cypress.config("baseUrl");

class LoginPage {
    
    acessarSite() {
        cy.visit(url)
    }

    acessarPagina() {
        cy.visit(`${url}/customer/login`)
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click({force: true})
    }
  
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu a sua senha?')
    }

    acessarCriarConta() {
        cy.get(loginElements.botaoCriarConta()).click({force: true})
    }
}

export default LoginPage;