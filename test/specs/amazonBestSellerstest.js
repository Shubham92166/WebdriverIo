const { expect } = require('chai')
const amazonBestSellersPage = require('../pageobjects/amazonBestSellers.page')

describe('Amazon ', function(){

    it('add the item to cart from best sellers tab', function(){
        browser.url('https://www.amazon.in/')
        amazonBestSellersPage.bestSellersProductAddToCart()
    })

    it('verify the add to cart button is enabled from best sellers tab', function(){
        browser.url('https://www.amazon.in/')
        expect(amazonBestSellersPage.validateAddToCartButton(),"add to cart button is not enabled").to.be.true
    })
})