class ElementUtil {

    isElementDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    isElementEnabled(element){
        element.waitForDisplayed()
        return element.isEnabled()
    }

    clickElement(element){
        element.waitForDisplayed()
        element.click()
    }

    setValue(element,value){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(value)
    }

    getText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    isElementExisting(element){
        return element.isExisting()
    }

    isElementSelected(element){
        element.waitForDisplayed()
        return element.isSelected()
    }

    isElementClickable(element){
        element.waitForEnabled(time)
        return element.isClickable()
    }

    scrollElementIntoView(element){        
        element.scrollIntoView()
    }

    clearInput(element){
        element.waitForDisplayed(time)
        element.clearValue()
    }

    getElementProperty(element, property){
        element.waitForDisplayed()
        return element.getProperty(property)
    }

    getElementLocation(element){
        element.waitForDisplayed()
        return element.getLocation()
    }

    getElementAttribute(element, attributeName){
        element.waitForDisplayed()
        return element.getAttribute(attributeName)
    }

    getTagNameOfElement(element){
        element.waitForDisplayed()
        return element.getTagName()
    }

    getElementValue(element){
        element.waitForDisplayed()
        return element.getValue()
    }

    isElementFocused(element){
        element.waitForDisplayed()
        return element.isFocused()
    }

    selectAttributeByValue(element, attribute, value){
        element.waitForDisplayed()
        element.selectByAttribute(attribute, value)
    }

    selectElementByIndex(element, index){
        element.waitForDisplayed()
        element.selectByIndex(index)
    }

    selectByText(element, text){
        element.waitForDisplayed()
        element.selectByVisibleText(text)
    }

    dragAndDropElement(element, target){
        element.waitForDisplayed()
        element.dragAndDrop(target)
    }

    waitForClickableElement(element,timeout, reverse, timeoutMsg, interval){
        element.waitForClickable({timeout, reverse, timeoutMsg, interval})
    }

    takeScreenshot(element, filename){
        element.saveScreenshot(filename)
    }


}
module.exports = new ElementUtil()