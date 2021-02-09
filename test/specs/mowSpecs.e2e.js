//@Author: Shubham
const mobileSearchPage = require("../pageobjects/mmtSearch.page");
const mobileFilterPage = require("../pageobjects/mmtFilters.page");
const { expect } = require("chai");
const mobileHomePage = require("../pageobjects/mmtHome.page");
describe("Flight Booking in mobile browser", function () {
	this.retries(2);
	beforeEach(() => {
		browser.url("/");
	});

	it("Searching flight", function () {
		mobileHomePage.home();
		mobileSearchPage.mobileSearch();
	});

	it("Filtering flight", function () {
		mobileHomePage.home();
		mobileSearchPage.mobileSearch();
		mobileFilterPage.FlightFilters();
	});
});
