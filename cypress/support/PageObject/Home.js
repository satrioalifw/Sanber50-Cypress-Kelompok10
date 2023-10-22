class Home{
    createaccountbutton = ".panel > .header > :nth-child(3) > a"

    clickcreateaccount (){
        cy.get(this.createaccountbutton)
        .click
    }
}

    export default new Home()