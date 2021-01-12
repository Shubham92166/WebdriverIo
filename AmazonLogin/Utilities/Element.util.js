class ElementUtil {

    open(path){
        browser.url(path);
    }

    doclick(element){
        element.waitForDisplayed(time)
        element.click()
    }

    dosetvalue(element, value){

        element.waitForDisplayed()
        element.setValue(value)
    }

    setvalue(value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    dogetText(){
        element.waitForDisplayed()
        return element.getText()
    }

    doElementDisplayed(element){
        element.waitForDisplayed(time)
        return element.isDisplayed()
    }

    waitfortitle(pagetitle)
    {
        browser.waitUntil(function(){
            return(browser.getTitle()===pagetitle)
        }, 15000, 'session time out')
        return browser.getTitle()
    }

    doGetTitle(){
       // element.waitForDisplayed()
        return browser.getTitle()
    }

}

module.exports=new ElementUtil();
    
