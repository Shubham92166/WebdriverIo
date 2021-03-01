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
	get CityNameOfHeader() {
		return $('(//input[@class="hsw_inputField font16 whiteText"])[1]');
	}
	get checkinDateofHeader() {
		return $("#checkin");
	}
	get checkOutDateOfHeader() {
		return $("#checkout");
	}
	get roomsAndGuestsOfHeader() {
		return $("#guest");
	}
	get searchButtonOfHeader() {
		return $("#hsw_search_button");
	}
	get cityFieldOfHeader() {
		return $('//input[@placeholder="Enter City / Hotel / Area / Landmark"]');
	}
	get suggestionForCityOfHeader() {
		return $('//p[text()="Bengaluru, Karnataka, India"]');
	}
	get changeCheckinDateOfHeader() {
		return $('(//div[@aria-label="Tue Mar 16 2021"])[1]');
	}
	get changeCheckOutDateOfHeader() {
		return $('(//div[@aria-label="Wed Mar 17 2021"])[1]');
	}
	get numberOfAdults() {
		return $('(//ul[@class="guestCounter font12 darkText"])[1]/li[3]');
	}
	get numberOfChildren() {
		return $('(//ul[@class="guestCounter font12 darkText"])[2]/li[3]');
	}
	get ageOfFirstChildDropDown() {
		return $('(//label[@class="lblAge"])[1]');
	}
	get ageOfFirstChildDropDownOption() {
		return $('(//label[@class="lblAge"])[1]/select/option[11]');
	}
	get ageOfSecondChildDropDown() {
		return $('(//label[@class="lblAge"])[2]');
	}
	get ageOfSecondChildDropDownOption() {
		return $('(//label[@class="lblAge"])[2]/select/option[11]');
	}
	get applyButton() {
		return $(".primaryBtn.btnApply");
	}
	get anotherRoomButton() {
		return $("#hsw_add_another_room_btn");
	}
	get hotelsDisplyedList() {
		return $$('//div[@class="makeFlex flexOne padding20 relative lftCol"]');
	}
}
module.exports = new resultPage();
