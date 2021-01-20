class ElementUtil {

    isElementDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    isElementEnabled(element){
        element.waitForDisplayed()
        return element.isEnabled()
    }

    getTitle(){
        return browser.getTitle()
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

    //Assert methods

    validateIfTrue(element, msg){
        return assert.isTrue(element, msg);
    }

    validateIfEqual(actualValue, expectedValue, msg){
        return assert.equal(actualValue, expectedValue , msg)
    }

    validateIfNotEqual(actualValue, expectedValue, msg){
        return assert.notEqual(actualValue, expectedValue, msg)
    }

    validateIfStrictEqual(actualValue, expectedValue, msg){
        return assert.strictEqual(actualValue, expectedValue, msg)
    }

    validateIfNotStrictEqual(actualValue, expectedValue, msg){
        return assert.notStrictEqual(actualValue, expectedValue, msg)
    }

    validateIfDeepEqual(actualValue, expectedValue, msg){
        return assert.deepEqual(actualValue, expectedValue, msg)
    }

    validateIfNotDeepEqual(actualValue, expectedValue, msg){
        return assert.notDeepEqual(actualValue, expectedValue, msg)
    }

    validateIfAbove(valueToCheck, valueToBeAbove, msg){
        return assert.isAbove(valueToCheck, valueToBeAbove, msg)
    }

    validateIfIsAtLeast(valueToCheck, valueToBeAtLeast, msg){
        return assert.isAtLeast(valueToCheck, valueToBeAtLeast, msg)
    }

    validateIfLess(valueToCheck, valueToBeBelow, msg){
        return assert.isBelow(valueToCheck, valueToBeBelow, msg)
    }

    validateIfIsAtMost(valueToCheck, valueToBeAtMost, msg){
        return assert.isAtMost(valueToCheck, valueToBeAtMost, msg)
    }

    validateIfIsFalse(value, msg){
        return assert.isFalse(value, msg)
    }

    validateIfIsNotFalse(value, msg){
        return assert.isNotFalse(value, msg)
    }

    validateIfIsNull(value, msg){
        return assert.isNull(value, msg)
    }

    validateIfIsNotNull(value, msg){
        return assert.isNotNull(value, msg)
    }

    validateIfExists(value, msg){
        return assert.exists(value, msg)
    }

    validateIfNotExists(value, msg){
        return assert.notExists(value, msg)
    }

    validateIfIsUndefined(value, msg){
        return assert.isUndefined(value, msg)
    }

    validateIfIsDefined(value, msg){
        return assert.isDefined(value, msg)
    }

    validateIfFunction(value, testMsg){
        return assert.isFunction(value, testMsg)
    }

    validateIfNotFunction(value, msg){
        return assert.isNotFunction(value, msg)
    }

    validateIfIsObject(value, msg){
        return assert.isObject(value, msg)
    }

    validateIfIsNotObject(value, msg){
        return assert.isNotObject(value, msg)
    }

    validateIfArray(value, msg){
        return assert.isArray(value, msg)
    }

    validateIfNotArray(value, msg){
        return assert.isNotArray(value, msg)
    }

    validateIfString(value, msg){
        return assert.isString(value, msg)
    }

    validateIfNotString(value, msg){
        return assert.isNotString(value, msg)
    }

    validateIfNumber(value, msg){
        return assert.isNumber(value, msg)
    }

    validateIfNotNumber(value, msg){
        return assert.isNotNumber(value, msg)
    }

    validateIfFinite(value, msg){
        return assert.isFinite(value, msg)
    }

    validateIfBoolean(value, msg){
        return assert.isBoolean(value, msg)
    }

    validateIfNotBoolean(value, msg){
        return assert.isNotBoolean(value, msg)
    }



}
module.exports = new ElementUtil()