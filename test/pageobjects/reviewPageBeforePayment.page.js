const switchToWindow = require("../../Utilities/browser");
const reviewHotelBookingPageElements = require("../elements/reviewPageBeforePayment.elements");
//const ReviewPageElements = require("../elements/reviewHotelBookingPage.elements");
const utilElements = require("../../Utilities/elements.util");
const hotelResultPage = require("../pageobjects/hotelResultPage.page");
const utilAssert = require("../../Utilities/assert.util");
const { expect } = require("chai");
//@Shubham
class ReviewPage {
	bookNowHotel() {
		utilElements.clickElement(reviewHotelBookingPageElements.firstNameField);
		utilElements.setValue(
			reviewHotelBookingPageElements.firstNameField,
			"Shubham"
		);
		utilElements.clickElement(reviewHotelBookingPageElements.lastNameField);
		utilElements.setValue(
			reviewHotelBookingPageElements.lastNameField,
			"Singh"
		);
		utilElements.clickElement(reviewHotelBookingPageElements.emailField);
		utilElements.setValue(
			reviewHotelBookingPageElements.emailField,
			"shubham92166@gmail.com"
		);
		utilElements.clickElement(
			reviewHotelBookingPageElements.mobileNumberField
		);
		utilElements.setValue(
			reviewHotelBookingPageElements.mobileNumberField,
			"7694091476"
		);
		//utilElements.clickElement(reviewHotelBookingPageElements.payNowButton);

		//utilAssert.validateIfEqual(
		//reviewHotelBookingPage.hotelNameFromReviewPage
		//);
	}
	validateIfCheckInDateSame() {
		expect(
			reviewHotelBookingPageElements.checkInDate.getText(),
			"Checkin Dates are not same"
		).to.have.contain("24 Feb");
	}
	validateIfCheckOutDateSame() {
		expect(
			reviewHotelBookingPageElements.checkOutDate.getText(),
			"Checkout dates are not same"
		).to.have.contain("25 Feb");
	}
	validateIfTotalAmountDisplayed() {
		utilAssert.validateIfExists(
			reviewHotelBookingPageElements.totalAmount,
			"Total Amount is not displayed"
		);
	}
	validateIfHotelNameSame() {
		expect(
			hotelResultPage.hotelNameDisplayedOnResultPage,
			"Hotel name is not same"
		).to.have.contain(
			reviewHotelBookingPageElements.hotelNameDisplayedOnReviewPage.getText()
		);
	}
}

module.exports = new ReviewPage();
