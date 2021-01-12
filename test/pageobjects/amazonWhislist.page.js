const amazonWhislistElements = require('../elements/amazonWhislist.element')
const browserUtil = require('../../utilities/browser.util')
const elementUtil = require('../../utilities/elements.util')

class AmazonWhislistPage {

    addToWhislist(element){
        amazonWhislistElements.searchBox.setValue(element)
        amazonWhislistElements.searchButton.click()
        amazonWhislistElements.novel.scrollIntoView()
        amazonWhislistElements.novel.click()
        browserUtil.switchToTab(amazonWhislistElements.novelTitle)
        amazonWhislistElements.whislistButton.scrollIntoView()
        amazonWhislistElements.whislistButton.click()
    }

    validateWhislistButton(){
        if(amazonWhislistElements.emailOrMobileno.isDisplayed()){
            return true
        }
        else{
            return false
        }
    }
}

module.exports = new AmazonWhislistPage()