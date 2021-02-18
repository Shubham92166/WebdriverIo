class resultPage {
	get selectHotel() {
		if (isMobile) {
			return $('(//div[@class="hotelListingCardListingCardPwa  "])[1]');
		} else {
			return $('(//div[@class="flexOne appendLeft20"])[1]');
		}
	}
}
module.exports = new resultPage();
