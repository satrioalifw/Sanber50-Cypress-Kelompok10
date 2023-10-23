class PageAccount{

    successmessage='.message-success > div'

    checkurl(){
        cy.url()
        .should('include', '/customer/account')
        
    }
    getmessagesuccess(){
        cy.get(this.successmessage)

        .should('contain.text', 'Thank you for registering with Main Website Store.')

    }
}

    export default new PageAccount()
