const resultPageElements = require("../elements/hotelResultPage.elements");
const util = require("../../Utilities/elements.util");
const utilAssertion = require("../../Utilities/assert.util");
const { expect } = require("chai");
class resultPage {
	selectFirstHotel() {
		util.clickElement(resultPageElements.selectHotel);
		const HotelNameDisplayedOnResultPage = resultPageElements.hotelNameDisplayedOnResultPage.getText();
	}
	validateIfHotelImageDisplayed() {
		let imageList = resultPageElements.checkWhetherHotelImageDisplayed;
		for (let i = 0; i < imageList.length; i++) {
			expect(imageList[i].isDisplayed());
			console.log("All images are displayed");
		}
	}
	hotelNameDisplayedOnResultPage() {
		return HotelNameDisplayedOnResultPage;
	}
	validateDataBeforeChange() {
		let cityText = resultPageElements.CityNameOfHeader.getAttribute("value");
		expect(cityText).to.have.contain("Goa");

		let checkinDateText = resultPageElements.checkinDateofHeader.getAttribute(
			"value"
		);
		expect(checkinDateText).to.have.contain("15 Mar");
		let checkOutDateText = resultPageElements.checkOutDateOfHeader.getAttribute(
			"value"
		);
		expect(checkOutDateText).to.have.contain("16 Mar");
		let roomText = resultPageElements.roomsAndGuestsOfHeader.getAttribute(
			"value"
		);
		expect(roomText).to.have.contain("1 Room, 2 Adults");
	}
	changeDataToSearchNewHotels() {
		util.clickElement(resultPageElements.CityNameOfHeader);
		util.setValue(resultPageElements.cityFieldOfHeader, "Bangalore");
		browser.pause(2000);
		util.clickElement(resultPageElements.suggestionForCityOfHeader);
		util.clickElement(resultPageElements.checkinDateofHeader);
		util.clickElement(resultPageElements.changeCheckinDateOfHeader);
		util.clickElement(resultPageElements.changeCheckOutDateOfHeader);
		util.clickElement(resultPageElements.roomsAndGuestsOfHeader);
		util.clickElement(resultPageElements.numberOfAdults);
		util.clickElement(resultPageElements.numberOfChildren);
		util.clickElement(resultPageElements.ageOfFirstChildDropDown);
		util.clickElement(resultPageElements.ageOfFirstChildDropDownOption);
		util.clickElement(resultPageElements.ageOfSecondChildDropDown);
		util.clickElement(resultPageElements.ageOfSecondChildDropDownOption);
		util.clickElement(resultPageElements.anotherRoomButton);
		util.clickElement(resultPageElements.numberOfAdults);
		util.clickElement(resultPageElements.numberOfChildren);
		util.clickElement(resultPageElements.ageOfFirstChildDropDown);
		util.clickElement(resultPageElements.ageOfFirstChildDropDownOption);
		util.clickElement(resultPageElements.ageOfSecondChildDropDown);
		util.clickElement(resultPageElements.ageOfSecondChildDropDownOption);
		util.scrollElementIntoView(resultPageElements.applyButton);
		util.clickElement(resultPageElements.applyButton);
		util.clickElement(resultPageElements.searchButtonOfHeader);
	}
	validateIfAtleastOneHotelIsDisplayed() {
		let hotelsCount = resultPageElements.hotelsDisplyedList.length;
		utilAssertion.validateIfIsAtLeast(
			hotelsCount,
			1,
			"No hotel is displayed"
		);
	}
}
module.exports = new resultPage();
