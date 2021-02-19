const homeElementsForHotelBooking = require("../elements/homePageForHotelSearch.elements");
const switchWindow = require("../../Utilities/browser");
const util = require("../../Utilities/elements.util");
class HomePage {
	//@Shubham
	HomePageMethod() {
		if (isMobile) {
			util.waitForPageLoad();
			util.clickElement($('//span[@data-cy="close"]'));
		}
		util.clickElement(homeElementsForHotelBooking.hotelIcon);
		util.clickElement(homeElementsForHotelBooking.CitySelect);
		util.setValue(homeElementsForHotelBooking.cityField, "Goa India");
		browser.pause(2000);
		util.clickElement(homeElementsForHotelBooking.citySuggestion);
		util.clickElement(homeElementsForHotelBooking.checkInCalendar);
		util.clickElement(homeElementsForHotelBooking.checkInCalendarDateSelect);
		util.clickElement(homeElementsForHotelBooking.checkOutDateSelect);
		if (isMobile) {
			util.clickElement($('//a[text()="DONE"]'));
		}
		util.clickElement(homeElementsForHotelBooking.submitButton);
	}
}
module.exports = new HomePage();
