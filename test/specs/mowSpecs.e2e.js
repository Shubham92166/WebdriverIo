//@Author: Shubham
const mobileSearchPage = require("../pageobjects/mmtSearch.page");
const mobileFilterPage = require("../pageobjects/mmtFilters.page");
const { expect } = require("chai");
const mobileHomePage = require("../pageobjects/mmtHome.page");
describe("Flight Booking in mobile browser", function () {
	it("Searching flight", function () {
		browser.url("/");
		mobileHomePage.home();
		mobileSearchPage.mobileSearch();
		browser.pause(2000);
	});
	it("Filtering flight", function () {
		mobileFilterPage.FlightFilters();
		browser.pause(2000);
	});
});
