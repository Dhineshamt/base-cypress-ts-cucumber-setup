import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { Login } from './../../page_action/login';

Given('I open Google images page', () => {
  cy.visit('/imghp');
});

