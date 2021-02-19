//@Shubham
class detailPage {
	get bookNowButton() {
		if (isMobile) {
			return $(
				'//span[@class="makeFlex hrtlCenter"]/span[contains(@class,"blueBtn")]'
			);
		} else {
			return $('//a[text()="BOOK THIS NOW"]');
		}
	}
}
module.exports = new detailPage();
