describe('Web UI Magento', () => {
    it('Login Magento', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        cy.get('#email')').type('email')
        cy.get('#pass')').type('password')
