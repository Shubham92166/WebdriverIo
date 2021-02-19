class resultPage {
	get selectHotel() {
		if (isMobile) {
			return $('(//div[@class="hotelListingCardListingCardPwa  "])[1]');
		} else {
			return $('(//div[@class="flexOne appendLeft20"])[1]');
		}
	}
	get hotelNameDisplayedOnResultPage() {
		if (isMobile) {
			return $(
				'//span[contains(@class,"blueBtn pushRight paddingLR20 ripple paddingTB12 latoBold  continueLoader")]'
			);
		} else {
			return $(
				'(//p[@class="latoBlack font22 blackText appendBottom12"])[1]'
			);
		}
	}
	get checkWhetherHotelImageDisplayed() {
		if (isMobile) {
			return $$('//div[@class="listingImgSlider"]');
		} else {
			return $$('//div[@class="imgCont"]');
		}
	}
}
module.exports = new resultPage();
