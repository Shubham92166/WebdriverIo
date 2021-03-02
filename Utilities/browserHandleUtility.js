//@Sailokeshwar
class switchWindow {
	switchToWindowContaining(title) {
		let AllWindowHandles = browser.getWindowHandles();
		let currentWindowHandle = browser.getWindowHandle();

		for (var handle = 0; handle <= AllWindowHandles.length; handle++) {
			browser.switchToWindow(AllWindowHandles[handle]);
			if (browser.getUrl().includes(title)) {
				return
			}
         
				browser.switchToWindow(currentWindowHandle);
			
		}
	}
}

module.exports = new switchWindow();