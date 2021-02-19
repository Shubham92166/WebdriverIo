//@Shubham
class ReviewPage {
	get bookNowButtonForHotel() {
		return $('(//p[@class="btn addHotelBtn LatoBold fli_secondry_btn"])[1]');
	}
}
module.exports = new ReviewPage();
