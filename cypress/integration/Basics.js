///<reference types="cypress"/>
before(()=>{
    cy.log("it should run the server locally");

})
beforeEach(()=>{
    cy.log("Should navigate to login page");

})
after(()=>{
    cy.log("Should kill the server")

})
afterEach(()=>{
    cy.log("Should navigate to proper login page");

})
describe("Login a site with proper credentials",()=>{
    it("Should navigate to the login page successfully",()=>{
        cy.log("Should have correct URL");

    })
    it("Should login with valid credentials",()=>{
        cy.log("Should have correct URL");
        cy.log("Fill the username and password");
        cy.log("Should have correct URL");
    })

})
