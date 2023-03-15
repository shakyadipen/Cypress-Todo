before(()=>{
    cy.visit("/");
    const items=['todo1','todo2','todo3','todo4'].forEach(todoitems=>{
        cy.AddTodoItems(todoitems)
    })

})
it("Should Update the todo list",function(){
   
   
    cy.get('.todo-checkbox').first().check().should('be.checked'); 
    cy.get('.todo-checkbox').last().check().should('be.checked'); 
})
after(()=>{
    cy.get('body').then(($el)=>{
        if($el.find('.delete-item').length>0){
            cy.get('.delete-item').click({multiple:true});
        }
    })
})