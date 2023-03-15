describe("Learn Fixture",()=>{
    beforeEach(()=>{
        cy.visit("cypress/index2.html");
        cy.fixture('user').then(user=>{
            user.email='test555@gmail.com'
        }).as('users')
        cy.fixture('location').then(locations=>{
            locations.temporary='Lalitpur'
        }).as('loca')
    })
    it("Should Enter user",()=>{
       
        // cy.fixture('user').then(user=>{
        //      cy.log(user)
        //      cy.get('#inputEmail').type(user.email)
        //      cy.get('#inputPassword').type(user.password)
        // })
        cy.get('@users').then(user=>{
            cy.log(user.email)
            cy.get('#inputEmail').type(user.email)
        })
        cy.get('@loca').then(locat=>{
            cy.log(locat.temporary)
        })
    })
    it("Should Enter Password",()=>{
        cy.get('@users').then(user=>{
            cy.log(user.password)
         cy.get('#inputPassword').type(user.password)
    })
    cy.get('@loca').then(locat=>{
        cy.log(locat.permanent)
    })
})
})