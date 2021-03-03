//const trendingFlightElements = require("./trendingFlight.elements");
//@Shubham
class trendingFlightResult {
	get firstFlight() {
		return $('//div[@class="fli-list  one-way"][1]');
	}
	get firstFlightViewPricesButton() {
		return $('(//div[@class="fli-list-body-section"] | //div[@class="listingCard"])[1]/..//*[text()="View Prices"]');
	}
	get firstFlightBookNowButton() {
		// return $(
		// 	'(//div[@class="fli-list-body-section"] | //div[@class="listingCard"])[1]/..//div[@class="viewFareRowWrap"][1]//button[text()="Book Now"]'
		// );
		return $('/html//div[@id="premEcon"]/div/div[1]/div[3]/div[1]//div[@class="viewFareRowWrap"][1]//div[@class="viewFareRow"]//div[@class="viewFareBtnCol"]/button[.="Book Now"]')
	}
}
module.exports = new trendingFlightResult();


////p[@class="font16 linkText latoBold textRight liteGreyBg addNewLink"]
