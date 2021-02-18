const resultPageElements = require("../elements/hotelResultPage.elements");
const util = require("../../Utilities/elements.util");
class resultPage {
	selectFirstHotel() {
		util.clickElement(resultPageElements.selectHotel);
	}
}
module.exports = new resultPage();
