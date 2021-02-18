class homePage {
	get hotelIcon() {
		if (isMobile) {
			return $('//span[@class="appendBottom3 mnsSprite mnsSprite__hotel"]');
		} else {
			return $('//li[@data-cy="menu_Hotels"]');
		}
	}
	get CitySelect() {
		if (isMobile) {
			return $('//span[@data-cy="locationChildren"]');
		} else {
			return $("#city");
		}
	}
	get cityField() {
		if (isMobile) {
			return $('//input[@placeholder="Enter Location/Hotel Name"]');
		} else {
			return $('//input[@placeholder="Enter city/ Hotel/ Area/ Building"]');
		}
	}

	get citySuggestion() {
		if (isMobile) {
			return $('(//span[@class="font16 appendBottom3 prependRight5"])[1]');
		} else {
			return $('//p[text()="Goa, India"]');
		}
	}
	get checkInCalendar() {
		if (isMobile) {
			return $('//div[@data-cy="checkinField"]');
		} else {
			return $("#checkin");
		}
	}
	get checkInCalendarDateSelect() {
		if (isMobile) {
			return $('//div[@aria-label="Wed Feb 24 2021"]');
		} else {
			return $('//div[@aria-label="Wed Feb 24 2021"]');
		}
	}
	get checkOutDateSelect() {
		if (isMobile) {
			return $('//div[@aria-label="Thu Feb 25 2021"]');
		} else {
			return $('//div[@aria-label="Thu Feb 25 2021"]');
		}
	}
	get submitButton() {
		if (isMobile) {
			return $('//button[@data-cy="search"]');
		} else {
			return $('//button[@id="hsw_search_button"]');
		}
	}
}
module.exports = new homePage();
