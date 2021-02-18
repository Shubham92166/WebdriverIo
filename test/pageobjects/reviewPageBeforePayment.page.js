const switchToWindow = require("../../Utilities/browser");
const reviewHotelBookingPageElements = require("../elements/reviewPageBeforePayment.elements");
//const ReviewPageElements = require("../elements/reviewHotelBookingPage.elements");
const utilElements = require("../../Utilities/elements.util");
const utilAssert = require("../../Utilities/assert.util");
// ReviewPageElements = require("../elements/reviewHotelBookingPage.elements");
//const { switchToWindowContaining } = require("../../Utilities/browser");
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
		expect(
			reviewHotelBookingPageElements.checkInDate.getText()
		).to.have.contain("24 Feb");
		utilAssert.validateIfElementListContainsText(
			reviewHotelBookingPageElements.checkOutDate,
			"25 Feb"
		);
		utilAssert.validateIfExists(
			reviewHotelBookingPageElements.totalAmount,
			"Total Amount is displayed"
		);
	}
}
module.exports = new ReviewPage();
