class Home{
    createaccountbutton = "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a"

    clickcreateaccount (){
        cy.get(this.createaccountbutton)
        .click()
    }
}

    export default new Home()