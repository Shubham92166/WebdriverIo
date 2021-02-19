const resultPageElements = require("../elements/hotelResultPage.elements");
const util = require("../../Utilities/elements.util");
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
}
module.exports = new resultPage();
