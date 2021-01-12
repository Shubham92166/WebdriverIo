const amazonBestSellersElements = require('../elements/amazonBestSellers.element')
const browserUtil = require('../../utilities/browser.util')
const elementUtil = require('../../utilities/elements.util')

class AmazonBestSellersPage {

    bestSellersProductAddToCart(){
        amazonBestSellersElements.bestSellers.click()
        amazonBestSellersElements.electronics.click()
        amazonBestSellersElements.electronicItem.scrollIntoView()
        amazonBestSellersElements.electronicItem.click()
        amazonBestSellersElements.addToCartButton.click()
    }

    validateAddToCartButton(){
        amazonBestSellersElements.bestSellers.click()
        amazonBestSellersElements.electronics.click()
        amazonBestSellersElements.electronicItem.scrollIntoView()
        amazonBestSellersElements.electronicItem.click()
        browser.pause(3000)
        return amazonBestSellersElements.addToCartButton.isEnabled()
    }
}

module.exports = new AmazonBestSellersPage()
