class Browser {
    switchToTab(title){
        var allWindowHandles = browser.getWindowHandles()
        var currentWindow = browser.getWindowHandle()
        for(var i in allWindowHandles)
        {
            browser.switchToWindow(allWindowHandles[i])
            if(browser.getTitle().includes(title)){
                break
            }
            else{
                browser.switchToWindow(currentWindow)
            }
        }
    }
}

module.exports = new Browser();