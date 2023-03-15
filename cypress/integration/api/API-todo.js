describe("Test All Functionalities Using API",()=>{
    // ["macbook-15","iphone-x"].forEach(size=>{
        //add
        //get
        //update
        //delete

        // before(()=>{
        //     cy.TodosAPI();
        //     cy.visit("/");
        //     cy.url().as('url')
        // })
        // after(()=>{
        //     cy.get('body').then(($el)=>{
        //         if($el.find('.delete-item').length>0){
        //             cy.get('.delete-item').click({multiple:true});
        //         }
        //     })
        // })
        //POST
        let id;
        it("Should Add the Todo Correctly Using API",()=>{
                cy.request({
                    method:"POST",
                    url:"http://localhost:8080/todos",
                    body:{
                        "name":"Hello There",
                        "isComplete":"True"
                    }
                }).then(response=>{
                    id= response.body.id
                    expect(response.status).to.eq(201)
                    expect(response.body.name).to.eq("Hello There")

                })
           

            })
            it("Should Get the Exact Todo Item Using ID",()=>{
                cy.request({
                    method:"GET",
                    url:"http://localhost:8080/todos/"+id
                }).then(response=>{
                    expect(response.body.name).to.eq("Hello There")
                })
                
        })
        it("Should Update Item Using ID",()=>{
            cy.request({
                method:"PUT",
                url:"http://localhost:8080/todos/"+id,
                body:{
                    "name":"Haha Foooled",
                    "isComplete":"False"
                }
            }).then(response=>{
                expect(response.body.name).to.eq("Haha Foooled")
                expect(response.status).to.eql(200)
            })

      
       
        
    // })
   

})
})
