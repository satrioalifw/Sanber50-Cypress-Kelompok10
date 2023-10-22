describe('Homepage Test Suite', () => {
    beforeEach(() => {
        cy.visit('')

    })

    it('Buka halaman depan', () => {
        cy.get('.home-main > .content > .info').should('be.visible')
        cy.get('.content-heading > .title').should('be.visible')
    })

    it('Dapat mencari product', () => {
        const productName = 'tank';
        cy.get('#search').type(productName);
        cy.get('button[title="Search"]').click();
        cy.url().should('include', 'catalogsearch/result/');
        cy.contains('h1', `Search results for: '${productName}'`)
    })

  
})