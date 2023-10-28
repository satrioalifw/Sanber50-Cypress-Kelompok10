describe('Web UI Magento', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })
    it('Success Login Magento', () => {
        cy.get('#email').type('melanicanandatr@gmail.com')
        cy.get('#pass').type('Melan123#')
        cy.get('#send2').click()
        cy.get('.logo').should('be.visible', 'LUMA')
    })
    it('Failed_Login', () => {
        cy.get('#email').type('melanicanandatr@gmail.com')
        cy.get('#pass').type('melan123')
        cy.get('#send2').click()
        cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]').should('be.visible')
    })
})