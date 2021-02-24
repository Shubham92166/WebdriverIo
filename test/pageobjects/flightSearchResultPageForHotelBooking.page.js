const searchResultPageElements = require("../elements/flightSearchResultPageForHotelBooking.elements");
//const switchToResultPage = require("../../Utilities/browser");
//const homePage = require("./homePageForHotelBooking.page");
const util = require("../../Utilities/elements.util");
const mobileSearchPage = require("../pageobjects/mmtSearch.page");
const mmtSearchPage = require("../pageobjects/mmtSearch.page");
//const { switchToWindowContaining } = require("../../Utilities/browser");
class searchResult {
	ResultPage() {
		if (browser.isMobile) {
			mmtSearchPage.mobileSearch();
		} else {
			util.waitForPageLoad();
			//searchResultPageElements.firstFlight.click();
			searchResultPageElements.firstFlightViewPricesButton.waitForExist({
				timeout: 20000,
			});
			searchResultPageElements.firstFlightViewPricesButton.click();
			//searchResultPageElements.firstFlightBookNowButton.waitForDisplayed();
			searchResultPageElements.firstFlightBookNowButton.click();
		}
	}
}
module.exports = new searchResult();
