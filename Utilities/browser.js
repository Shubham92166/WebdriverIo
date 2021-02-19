class switchWindow {
	switchToWindowContaining(title) {
		let AllWindowHandles = browser.getWindowHandles();
		let currentWindowHandle = browser.getWindowHandle();
		//console.log(AllWindowHandles);
		//console.log(currentWindowHandle);

		for (var handle = 0; handle <= AllWindowHandles.length; handle++) {
			browser.switchToWindow(AllWindowHandles[handle]);
			if (browser.getUrl().includes(title)) {
				//console.log("new window "+);
				break;
			} else {
				browser.switchToWindow(currentWindowHandle);
			}
		}
	}
}

module.exports = new switchWindow();
