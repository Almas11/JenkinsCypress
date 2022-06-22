
describe('Home Page',()=>{
    before('Navigate to the Website',()=>{
        cy.visit('/')
    })
    it('should appear Popup', ()=> {
        cy.get('#app-modal > .modal-dialog > .modal-content').should('be.visible')
    });
    it('should cancel QR Popup',  ()=> {
        cy.get('#app-modal > .modal-dialog > .modal-content > .modal-header > .close > span')
            .click({timeout:100})
            .should('not.be.visible')
    });
    it('should appear Logo',()=>{
        cy.get('.navbar-brand > img').should('be.visible')
    })
    it('should appear SearchBar ',()=> {
        cy.get('#app-search').should('be.visible')
    });
    it('should appear SearchList',()=> {
        const list = ["Apple iPhone X","Laptop","Toys","Lenovo Laptop"]
        const random = Math.floor(Math.random() * list.length);
        const getValue = list[random];
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
    it(()=>{

    })
})