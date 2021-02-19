const { retrieveSourceMap } = require("source-map-support");

class hotelBooking {
	get adult1_inputField() {
		return $(
			'//div[@class="css-1hwfws3 react-select-review__value-container"]'
		);
	}
	get addNewButton() {
		return $('//p[text()="Add New"]');
	}
	get firstNameField() {
		return $('//input[@id="FIRST_NAME"]');
	}
	get lastNameField() {
		return $('//input[@id="LAST_NAME"]');
	}
	get DOB_DD_Dropdown() {
		return $('//div[@id="DOB_DD"]');
	}
	get DOB_DD_Option() {
		return $('//div[@id="react-select-3-option-8"]');
	}
	get DOB_MM_Dropdown() {
		return $('//div[@id="DOB_MM"]');
	}
	get DOB_MM_Option() {
		return $('//div[@class="css-11unzgr"]/div[8]');
	}
	get DOB_YYYY_Dropdown() {
		return $('//div[@id="DOB_YYYY"]');
	}
	get DOB_YYYY_Option() {
		return $('//div[@class="css-11unzgr"]/div[6]');
	}
	get gender_DropDown() {
		return $('//div[text()="Enter a Gender"]');
	}
	get gender_Option() {
		return $('//div[text()="MALE"]');
	}
	get saveButton() {
		return $('//a[text()="Save"]');
	}
	get emailField() {
		return $('//input[@id="EMAIL"]');
	}
	get mobileCodeField() {
		return $('//input[@id="MOBILE_CODE"]');
	}
	get mobileNumberField() {
		return $('//input[@id="MOBILE_NUMBER"]');
	}
}
module.exports = new hotelBooking();
