const amazonAddToCartElements = require('../elements/amazonAddToCart.element')
const browserUtil = require('../../utilities/browser.util')

class AmazonAddToCartPage {

    addToCartValidation(){
        if(amazonAddToCartElements.addedToCart.getText().includes(amazonAddToCartElements.addedToCartText)){
            return true
        }
        else{
            return false
        }
    }

    addToCart(product){
        amazonAddToCartElements.searchBox.setValue(product)
        amazonAddToCartElements.searchButton.click()
        browser.pause(3000)
        amazonAddToCartElements.searchProduct.scrollIntoView()
        amazonAddToCartElements.searchProduct.click()
        browserUtil.switchToTab(amazonAddToCartElements.title)
        browser.pause(2000)
        amazonAddToCartElements.addToCartButton.click()
        browser.pause(3000)
        if(amazonAddToCartElements.noThanksButton.getText().includes(amazonAddToCartElements.noThanksText)){
            amazonAddToCartElements.noThanksButton.click()
            browser.pause(2000)
           // this.addToCartValidation()
           if(amazonAddToCartElements.addedToCart.getText().includes(amazonAddToCartElements.addedToCartText)){
            return true
        }
        else{
            return false
        }
        }
        else if(amazonAddToCartElements.addedToCart.getText().includes(amazonAddToCartElements.addedToCartText)){
            return true
        }
        else{
            return false
        }
    }


}

module.exports = new AmazonAddToCartPage()