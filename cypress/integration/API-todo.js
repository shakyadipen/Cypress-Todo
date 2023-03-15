describe("API Testing ",function(){
    // ["macbook-15","iphone-x"].forEach(size=>{
        beforeEach(()=>{
            cy.TodosAPI();
            cy.visit("/");
            cy.url().as('url')
        })
        afterEach(()=>{
            cy.get('body').then(($el)=>{
                if($el.find('.delete-item').length>0){
                    cy.get('.delete-item').click({multiple:true});
                }
            })
        })
        it("Should Add New Todo Correctly Using API",function(){
                
                // cy.get('@enter').type('{enter}');
          
          
            cy.log(this.url);
        })
      
       
        
    // })
   

})
