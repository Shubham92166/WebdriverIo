class BrowserUtil {
	switchToWindowContaining = (title) => {
		let AllWindowHandles = browser.getWindowHandles();
		let currentWindowHandle = browser.getWindowHandle();
		for (let handle of AllWindowHandles) {
			browser.switchToWindow(handle);
			if (browser.getTitle().includes(title)) return;
		}
		browser.switchToWindow(currentWindowHandle);
		return;
	};

	switchToWindowContainingURL(partialurl) {
		let AllWindowHandles = browser.getWindowHandles();
		let currentWindowHandle = browser.getWindowHandle();
		//console.log(AllWindowHandles);
		//console.log(currentWindowHandle);

		for (var handle = 0; handle <= AllWindowHandles.length; handle++) {
			browser.switchToWindow(AllWindowHandles[handle]);
			if (browser.getUrl().includes(partialurl)) {
				//console.log("new window "+);
				return;
			}  
			browser.switchToWindow(currentWindowHandle);
			
		}
	}

	maximizingWindow() {
		browser.maximizeWindow();
	}

	getTitle() {
		return browser.getTitle();
	}

	reloadPage() {
		browser.refresh();
	}
}

module.exports = new BrowserUtil();
