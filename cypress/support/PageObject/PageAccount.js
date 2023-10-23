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
    

    visitTank() {
        cy.visit('https://magento.softwaretestingboard.com/zoe-tank.html')
    }
    visitTees() {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    }

    visitHomepage() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }
    visitTees() {
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html');
    }
    
    getTabInfoDetail() {
        return '#tab-label-description-title';
    }
    getTabInfoAdd() {
        return '#tab-label-additional-title';
    }
    getTabReview() {
        return '#tab-label-reviews-title';
    }
}

    export default new PageAccount()
