/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pageobjects/LoginPage';

const loginPage = new LoginPage

Given("acesso o site X", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})