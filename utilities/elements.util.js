class ElementUtil {

    isElementDisplayed(element){
        return element.isDisplayed()
    }

    isElementEnabled(element){
        return element.isEnabled()
    }
}
module.exports = new ElementUtil()