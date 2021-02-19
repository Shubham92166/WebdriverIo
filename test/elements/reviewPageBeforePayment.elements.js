class ReviewHotelBooking {
	get firstNameField() {
		return $("#fName");
	}
	get lastNameField() {
		return $("#lName");
	}
	get emailField() {
		return $("#email");
	}
	get mobileNumberField() {
		return $("#mNo");
	}
	get payNowButton() {
		if (isMobile) {
			return $('//a[@class="btnMakePayment primaryBtn "]');
		} else {
			return $('//a[@class="btnContinuePayment primaryBtn  "]');
		}
	}
	get hotelNameFromReviewPage() {
		return $('//h3[@class="latoBlack font22 blackText"]');
	}
	get checkInDate() {
		if (isMobile) {
			return $(
				'(//p[@class="latoBlack font14 blackText appendBottom3"])[1]'
			);
		} else {
			return $(
				'(//span[@class="latoBlack font24 blackText appendBottom3"])[1]'
			);
		}
	}
	get checkOutDate() {
		if (isMobile) {
			return $(
				'(//p[@class="latoBlack font14 blackText appendBottom3"])[2]'
			);
		} else {
			return $(
				'(//span[@class="latoBlack font24 blackText appendBottom3"])[2]'
			);
		}
	}
	get totalAmount() {
		if (isMobile) {
			return $('//p[@class="f14 latoBlack redText makeFlex hrtlCenter"]');
		} else {
			return $('//p[@class="latoBlack redText"]');
		}
	}
	get hotelNameDisplayedOnReviewPage() {
		if (isMobile) {
			return $('//h3[@class="font16 latoBlack blackText appendBottom5"]');
		} else {
			return $('//h3[@class="latoBlack font22 blackText"]');
		}
	}
}
module.exports = new ReviewHotelBooking();
