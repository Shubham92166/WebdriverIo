const detailPageElements = require("../elements/hotelDetailPage.elements");
const util = require("../../Utilities/elements.util");
const switchWindow = require("../../Utilities/browser");
class detailPage {
	DetailPage() {
		if (!isMobile) {
			util.waitForPageLoad();
			switchWindow.switchToWindowContaining("hotels/hotel-details/");
		}
		util.waitForPageLoad();
		browser.pause(3000);
		//util.scrollElementIntoView(detailPageElements.bookNowButton);
		util.clickElement(detailPageElements.bookNowButton);
	}
}
module.exports = new detailPage();
