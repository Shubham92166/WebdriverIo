const { assert } = require("chai")
const data=require('../Data/data')

class Browser{

    switchToTab(titile)
    {
        browser.pause(3000)
        var allwindowHandles= browser.getWindowHandles()
        var currentWindowHandles= browser.getWindowHandle()
        for(var handle in allwindowHandles)
        
        {

            browser.switchToWindow(allwindowHandles[handle])
            browser.pause(2000)
            if((browser.getTitle()).includes(titile)) {
                

               // assert.equal(data.Product_Title, titile,'title is not found')
                return
            }
        }
        browser.switchToWindow(currentWindowHandles)
    }
}
module.exports=new Browser()