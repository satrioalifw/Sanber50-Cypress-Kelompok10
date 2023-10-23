describe('Web testing', () => {
    beforeEach(() => {
        cy.visit('')

    })

    it('Choose products', () => {
        // buka landing page
        cy.get('.home-main > .content > .info').should('be.visible')
        cy.get('.content-heading > .title').should('be.visible')

        // pilih dropdown Men, klik Tops
        cy.get('#ui-id-5').trigger('mouseover')
        cy.get('#ui-id-17').click()

        // pilih produk
        cy.url().visit ('/sparta-gym-tank.html')
        cy.wait(60)
    })

    it('Choose products lain', () => {
        // pilih dropdown Gear, klik Fitness Equipment
        cy.get('#ui-id-6').trigger('mouseover')
        cy.get('#ui-id-26').click()

        // pilih produk
        cy.url().visit ('/quest-lumaflex-trade-band.html')

        // add to cart
        cy.get('#product-addtocart-button').click()
    })
})
