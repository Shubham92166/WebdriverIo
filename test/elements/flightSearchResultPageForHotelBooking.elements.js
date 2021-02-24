const trendingFlightElements = require("./trendingFlight.elements");
//@Shubham
class trendingFlightResult {
	get firstFlight() {
		return $('(//div[@class="fli-list  one-way"])[1]');
	}
	get firstFlightViewPricesButton() {
		return $('(//div[@class="fli-list-body-section"])[1]/..//button');
	}
	get firstFlightBookNowButton() {
		return $(
			'(//div[@class="make_flex spaceBetween"])[1]/div[2]/div[2]/button'
		);
	}
}
module.exports = new trendingFlightResult();

////p[@class="font16 linkText latoBold textRight liteGreyBg addNewLink"]
