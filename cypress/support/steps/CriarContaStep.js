/* global Given, Then, When */
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pageobjects/LoginPage';

const loginPage = new LoginPage

Then("acesso a pagina de criar conta pelo botao", () => {
    loginPage.acessarCriarConta();
})

// 