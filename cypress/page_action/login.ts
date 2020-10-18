export class Login {
   static loginToApp() {
     cy.visit('https://www.google.com/');
   }

   static search() {
    cy.searchGoogle('cat pictures');
   }
}
