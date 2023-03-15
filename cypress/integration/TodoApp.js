describe("Suite1",function(){
    // ["macbook-15","iphone-x"].forEach(size=>{
        beforeEach(()=>{
            cy.visit("/");
            cy.url().as('url')
        })
        this.afterEach(()=>{
            cy.get('body').then(($el)=>{
                if($el.find('.delete-item').length>0){
                    cy.get('.delete-item').click();
                }
            })
        })
        it("Should Add New Todo Correctly",function(){
                cy.AddTodoItems('Eat');
                // cy.get('@enter').type('{enter}');
                cy.get('.todo-item').should('contain','Eat')
                // cy.get('.todo-item').last().should('contain.text','Hello there')
          
          
            cy.log(this.url);
        })
        it("shoudl update the status of todo list",function(){
            cy.AddTodoItems('Sleep')
            cy.get('.todo-checkbox').check().should('be.checked');
            // cy.get('.Complete').click()
            cy.get('.todo-item').should('contain.text','Sleep')
        })
        it("delete the todo list correctly",function(){
            cy.AddTodoItems('Repeat')
            cy.get('.todo-checkbox').check().should('be.checked');
            cy.get('.delete-item').click();
        })
        it("should not include the empty item ",function(){
            cy.AddTodoItems('')
            // cy.get('.error').should('be.visible')
            // cy.get('.todo-checkbox').check().should('be.checked');
            // cy.get('.delete-item').click();
        })


    // })
   

})
