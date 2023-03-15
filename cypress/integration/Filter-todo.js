describe("API Testing ",function(){
    // ["macbook-15","iphone-x"].forEach(size=>{
        before(()=>{
            cy.TodosAPI();
            cy.visit("/");
            cy.url().as('url')
        })
        after(()=>{
            cy.get('body').then(($el)=>{
                if($el.find('.delete-item').length>0){
                    cy.get('.delete-item').click({multiple:true});
                }
            })
        })
        it("Should Filter Checked-Todo Correctly Using API",function(){
                cy.contains('Complete').click();
                cy.url().should('contain','/complete')
                cy.get('.todo-checkbox').each(todosElement=>{
                    cy.wrap(todosElement).should('be.checked')
                })
        })
        it("Should Filter Unchecked-Todo Correctly Using API",function(){
            cy.contains('Active').click();
            cy.url().should('contain','/active')
            cy.get('.todo-checkbox').each(todosElement=>{
                cy.wrap(todosElement).should('not.be.checked')
            })
            // cy.get('@enter').type('{enter}');
    })

      
       
        
    // })
   

})
