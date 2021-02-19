const homePage = require("../pageobjects/homePageForHotelSearch.page");
const reviewPage = require("../pageobjects/reviewPageBeforePayment.page");
const resultPage = require("../pageobjects/hotelResultPage.page");
const detailPage = require("../pageobjects/hotelDetailPage.page");
//@Shubham
describe("Hotel Booking", function () {
	//this.retries(3);
	it("Searching Hotels", function () {
		browser.url("/");
		homePage.HomePageMethod();
		resultPage.validateIfHotelImageDisplayed();
		resultPage.selectFirstHotel();
		detailPage.DetailPage();
		reviewPage.bookNowHotel();
		reviewPage.validateIfCheckInDateSame();
		reviewPage.validateIfCheckOutDateSame();
		//reviewPage.validateIfHotelNameSame();
		reviewPage.validateIfTotalAmountDisplayed();
		browser.pause(5000);
	});
});
