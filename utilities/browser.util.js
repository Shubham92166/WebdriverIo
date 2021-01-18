switchToWindowContaining = (title) => {
    let AllWindowHandles = browser.getWindowHandles()
    let currentWindowHandle = browser.getWindowHandle();
    for (let handle of AllWindowHandles){
        browser.switchToWindow(handle)
        if(browser.getTitle().includes(title)) return;
    }
    browser.switchToWindow(currentWindowHandle);
    return ;
}

module.exports = {
    switchToWindowContaining
}