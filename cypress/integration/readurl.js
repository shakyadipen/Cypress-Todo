describe("Suite1",function(){
    // ["macbook-15","iphone-x"].forEach(size=>{
        beforeEach(()=>{
            cy.visit("cypress/index2.html");
            cy.url().as('url')
        })
        it("Should run succcessfulyy",function(){
            // cy.viewport(500,700);
        
            //cy.get('.course-list').children('.list1.web')
            // cy.get('.course-list').find('.list1.web')
            // cy.get('li').first();
            // cy.get('.course-list').last();
            // cy.get('li').eq(1)
            // cy.get(':nth-child(2) > .card-body > .btn')
            // cy.get('.btn.btn-primary').eq(0).click();
            // cy.get("#inputEmail").click().type("shakyadipen@gmail.com")
            // cy.get("#inputPassword").click().type("Redcross@1965");
            // cy.get('button[type="submit"]').click();
            // cy.get("#courses").select('selenium')
            // cy.get(".course-list>.list1").should('have.text','Cypress')
            // cy.get(".course-list").as("coursea");
            // cy.get('@coursea').then(courselist=>{
            //     cy.log(courselist.text())

            // })
       
            // cy.get('@url')
            cy.log(this.url);
        })
        it("shoudl run theh process",function(){
            // cy.url().as('url')
            // cy.get('@url')
            this.url
            cy.log(this.url);
        })

    // })
   

})
