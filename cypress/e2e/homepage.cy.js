
describe('Home Page',()=>{

    const list = ["Apple iPhone X","Laptop","Toys","Lenovo Laptop"]
    const random = Math.floor(Math.random() * list.length);
    const getValue = list[random];

    before('Navigate to the Website',()=>{
        cy.visit('/')
    })
    it('should appear Logo',()=>{
        cy.cancelPopup()
        cy.get('.navbar-brand > img').should('be.visible')
    })
    it('should appear SearchBar ',()=> {
        cy.get('#app-search').should('be.visible')
    });
    it('should appear SearchList',()=> {
        cy.get('#app-search').type(getValue,{timeout:100})
        cy.get('.searchSuggestionBox').should('be.visible')
        cy.get('#SearchResultLoader > .spinner-border').should('not.be.visible')
        cy.get('.searchSuggestionBoxChild > li > a').each(($el)=>{
            const actual = $el.text()
            const expected = list[random].split(" ")
            for (let i=0; i<expected.length; i++){
                expect(actual).contain(expected[i])
            }
        })
    })
    it("verify search is working ",()=>{
        cy.get('.input-group-prepend-overlay > .input-group-text > .czi-search').click()
        cy.cancelPopup()


    })
})