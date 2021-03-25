//Anmol
class ElementUtil{

    removePopups(selector){

        if(selector.isExisting()){
        
            selector.click();
        }

    }

    customClick(element){
        element.waitForDisplayed({ timeout: 3000 })
        element.click()
    }

    viewAndBook(e1,e2){
        e1.waitForDisplayed({ timeout: 3000 })
        e1.click()

        browser.pause(4000)

        e2.waitForDisplayed({ timeout: 3000 })
        e2.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed({ timeout: 3000 })
        element.addValue(value)
    }

}

module.exports = new ElementUtil()