import PageAccount from "../../support/PageObject/PageAccount"
import Price from "../../support/PageObject/Price"
import Product from "../../support/PageObject/Product"


const price = Price.getPrice()
const productName = "Radiant Tee"
const tees = Product.getProduct_tees()
const size = Product.getSize()
const color = Product.getColor()
const tabdetail= PageAccount.getTabInfoDetail()
const tabInfoAdd = PageAccount.getTabInfoAdd()
const tabReview = PageAccount.getTabReview()
const email = 'putri@gmail.com'
const pass = 'Putri123'
const mini_list = Product.getCartList()
const cart_item = Product.getCart_tees()
const Women = "Zoe"
const colorMan = Product.getColorMan()
const cart_delete = Product.getCartDelete()

describe('Shopping cart page', () => {
    beforeEach(() => {
        cy.visit('')
       
        cy.wait(50)
        cy.contains('Sign In').click()
        cy.get('#email').type(email)
        cy.get('#pass').type(pass)
        cy.get('#send2').as('btn').click()
        cy.wait(50)

    })

    it('Verifikasi user login dapat melihat dan menambah produk ke keranjang belanja', () => {
        cy.get("#search").type(productName).type("{enter}")
        cy.get(tees).click()
        cy.wait(50)
        cy.get(tees).should('be.visible')
        PageAccount.visitTees()
        cy.wait(50)
        cy.get(price).should('contain', '$22.00')
        cy.get(size).click()
        cy.get(color).click()
        cy.wait(50)
        cy.get(tabdetail).should('be.visible')
        cy.wait(50)
        cy.get(tabInfoAdd).click()
        cy.wait(50);
        cy.get(tabInfoAdd).should('be.visible')
        cy.wait(50)
        cy.get(tabReview).click()
        cy.wait(50);
        cy.get(tabReview).should('be.visible')
        cy.wait(50)
        cy.get('#qty').clear()
        cy.get('#qty').type('1')  
        cy.get('#product-addtocart-button').click()
        cy.wait(50)
      })
  
      it("Verifikasi dapat mengubah jumlah dalam keranjang", () => {
        cy.wait(50)
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.minicart-wrapper > .action').click()
        cy.wait(50)
        cy.get(mini_list).click()
        cy.wait(50)
        cy.get(cart_item).first().type('{selectall}3')
        cy.get('.update > span').contains("Update").click()
     })

     it("Verifikasi menampilkan harga dan total produk yang benar", () => {
        cy.wait(50)
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.minicart-wrapper > .action').click()
        cy.wait(50)
        cy.get(mini_list).click()
        cy.wait(50)
        cy.get('.cart-summary').should('be.visible')
      })

    
     it('Verifikasi dapat menggabungkan barang yang sudah dalam keranjang dengan barang yang baru dipilih', () => {
        cy.get("#search").type(Women).type("{enter}")
        cy.get('.block > :nth-child(2) > a').click()
        cy.wait(50)
        cy.get(tees).should('be.visible')
        PageAccount.visitTees()
        cy.wait(50)
        cy.get(price).should('contain', '$22.00')
        cy.get(size).click()
        cy.get(colorMan).click()
        cy.get(tabdetail).should('be.visible')
        cy.wait(50);
        cy.get(tabInfoAdd).click()
        cy.wait(50);
        cy.get(tabInfoAdd).should('be.visible')
        cy.wait(50)
        cy.get(tabReview).click()
        cy.wait(50)
        cy.get(tabReview).should('be.visible')
        cy.wait(50)
        cy.wait(50)
        cy.get('#qty').clear()
        cy.get('#qty').type('1')
        cy.get('#product-addtocart-button').click()
        cy.wait(50)
      })
      it("Verifikasi user dapat menghapus produk dari keranjang", () => {
        cy.wait(50)
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.minicart-wrapper > .action').click()
        cy.wait(50)
        cy.get(mini_list).click()
        cy.wait(50)
        cy.get('#form-validate').contains("Tee").should("be.visible")
        cy.get(cart_delete).click()
      })
 })