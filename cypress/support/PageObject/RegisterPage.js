class RegisterPage{

firstNameField ='#firstname'
lastNameField = '#lastname'
emailAddressField = '#email_address'
passwordField = '#password'
confirmPasswordField = '#password-confirmation'
createAccountbtn = '#form-validate > .actions-toolbar > div.primary > .action'


inputFirstName(firstName){
    cy.get(this.firstNameField)
    .type(firstName)
}
inputLastName(lastName){
    cy.get(this.lastNameField)
    .type(lastName)
}
inputEmailAddress(emailAddress){
    cy.get(this.emailAddressField)
    .type(emailAddress)
}
inputPassword(password){
    cy.get(this.passwordField)
    .type(password)
}
inputConfirmPassword(confirmPassword){
    cy.get(this.confirmPasswordField)
    .type(confirmPassword)
}
clickCreateanAccountButton(){
    cy.get(this.createAccountbtn)
    .click()
}

}

        export default new RegisterPage()