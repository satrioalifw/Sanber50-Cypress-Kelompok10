describe('Web UI Magento', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    })
    it('Login Magento', () => {
        cy.get('#email').type('email')
        cy.get('#pass').type('password')
        cy.get('#send2').click()
    })
})