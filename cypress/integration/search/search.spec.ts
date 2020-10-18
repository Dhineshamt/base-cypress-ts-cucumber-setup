import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { Login } from './../../page_action/login';


Given('I open Google home page', () => {
  cy.visit('/');
});
