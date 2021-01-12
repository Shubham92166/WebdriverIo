switchToWindowContaining = (title) => {
    let AllWindwoHandles = browser.getWindowHandles()
    let currentWindowHandle = browser.getWindowHandle();
    for (let handle of handles){
        browser.switchToWindow(handle)
        if(browser.getTitle().includes(title)) return;
    }
    browser.switchToWindow(currentWindowHandle);
    return ;
}

module.exports = {
    switchToWindowContaining
}