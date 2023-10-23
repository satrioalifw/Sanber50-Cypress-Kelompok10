import Home from "../../support/PageObject/Home"
import PageAccount from "../../support/PageObject/PageAccount"
import RegisterPage from "../../support/PageObject/RegisterPage"
import RandomEmail from "../../support/PageObject/RandomEmail"


describe('Success Go to Register Page', () => {
    beforeEach(() => {
        cy.visit('')
        cy.wait(1500)
    })
    afterEach(() => {
        cy.clearAllSessionStorage
    })



    it('Success Register New Account', () => {

        Home.clickcreateaccount()
// masih ada error namun belum ketemu fixingnya gimana T-T
        RegisterPage.inputFirstName('Rifqi')
        RegisterPage.inputLastName('Widjanarko')
        RegisterPage.inputEmailAddress(RandomEmail.generateRandomEmailAddress())
        RegisterPage.inputPassword('Rifqimw123')
        RegisterPage.inputConfirmPassword('Rifqimw123')
        RegisterPage.clickCreateanAccountButton()

        PageAccount.checkurl()
        PageAccount.getmessagesuccess()

    })

})
