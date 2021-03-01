const homePage = require("../pageobjects/homePageForHotelSearch.page");
const hotelResultPage = require("../pageobjects/hotelResultPage.page");
describe("Verify whether hotels are displayed after data changes", function () {
	it("Changing data", function () {
		browser.url("/");
		homePage.HomePageMethod();
		hotelResultPage.validateDataBeforeChange();
		hotelResultPage.changeDataToSearchNewHotels();
		hotelResultPage.validateIfAtleastOneHotelIsDisplayed();
	});
});
