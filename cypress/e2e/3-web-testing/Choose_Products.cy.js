describe('Choose Products', () => {
    beforeEach(() => {
        cy.visit('')

    })

    it('Buka landing page', () => {
        cy.get('.home-main > .content > .info').should('be.visible')
        cy.get('.content-heading > .title').should('be.visible')

        // pilih dropdown Men, klik Tops
        cy.get('#ui-id-5').trigger('mouseover')
        cy.get('#ui-id-17').click()

        // pilih produk
        cy.url().should ('include', '/sparta-gym-tank.html')
        cy.wait(60)
    })
})