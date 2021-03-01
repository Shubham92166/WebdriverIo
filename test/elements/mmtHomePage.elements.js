//@Author: Shubham
class mobileHome {
	get closeButton() {
		if (browser.isMobile) return $("");
		return $('//span[@data-cy="close"]');
	}
	get flightsButton() {
		return $('//span[@class="spriteIcnWrap"]');
	}
}
module.exports = new mobileHome();
