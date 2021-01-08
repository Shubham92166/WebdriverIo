const amazonAddToCartPage = require('../pageobjects/amazonAddToCart.page')
const amazonAddToCartElements = require('../elements/amazonAddToCart.element')
const browserUtil = require('../../utilities/browser.util')

describe('Amazon website',function(){
    it('verify whether item added to cart or not',function(){
        browser.url('https://www.amazon.in/')
        assert.isTrue(amazonAddToCartPage.addToCart(amazonAddToCartElements.product),'item is not added to cart')
    })
})