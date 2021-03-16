
class elementUtil{

    Click(element){
        element.waitForDisplayed({ timeout: 5000 })
        element.click()
    }

    SetValue(element, value){
        element.waitForDisplayed({ timeout: 5000 })
        element.setValue(value)
    }




	switchToWindowContaining(title) {
		let AllWindowHandles = browser.getWindowHandles();
		let currentWindowHandle = browser.getWindowHandle();
		

		for (var i = 0; i <= AllWindowHandles.length; i++) {
			browser.switchToWindow(AllWindowHandles[i]);
			if (browser.getUrl().includes(title)) {
				//console.log("new window "+);
				break;
			} 
            else {
				browser.switchToWindow(currentWindowHandle);
			}
		}
	}
}

module.exports = new elementUtil()