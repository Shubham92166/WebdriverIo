const homeElements = require("../elements/flightHomePageForHotelBooking.elements");
const flightSearchData = require("../data/trendingFlight.data");
const util = require("../../Utilities/elements.util");
const flightSearchResultPage = require("../elements/flightSearchResultPageForHotelBooking.elements");
const mmtHome = require("../pageobjects/mmtHome.page");
//const mmtHomePageElements = require("../elements/mmtHomePage.elements");
class flightSearchHome {
	HomePage() {
		console.log(isMobile);
		if (isMobile) {
			mmtHome.home();
		} else {
			util.clickElement(homeElements.fromTextBox);
			util.setValue(
				homeElements.fromTextBoxToEnterText,
				flightSearchData.fromCity
			);
			browser.pause(4000);
			util.clickElement(homeElements.suggestionTextForFrom);
			util.clickElement(homeElements.toTextBox);
			util.setValue(
				homeElements.toTextBoxToEnterText,
				flightSearchData.toCity
			);
			browser.pause(4000);
			util.clickElement(homeElements.suggestionTextForTo);
			util.clickElement(homeElements.departureCalendar);
			util.clickElement(homeElements.departureDate);
			util.clickElement(homeElements.submitButton);
		}
	}
}
module.exports = new flightSearchHome();
