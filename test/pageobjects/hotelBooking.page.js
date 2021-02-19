const { switchToWindowContaining } = require("../../Utilities/browser");
const hotelBookingElements = require("../elements/hotelBooking.elements");
//const hotelBookingElements = require("../elements/hotelBooking.elements");
const switchWindow = require("../../Utilities/browser");
const travellerDetails = require("../data/travellerDetails.data");
class hotelBooking {
	HotelBookingPage() {
		switchWindow.switchToWindowContaining("holidays/india/");
		hotelBookingElements.adult1_inputField.click();
		hotelBookingElements.addNewButton.click();
		hotelBookingElements.firstNameField.setValue(travellerDetails.firstName);
		hotelBookingElements.lastNameField.click();
		hotelBookingElements.lastNameField.setValue(travellerDetails.lastName);
		hotelBookingElements.DOB_DD_Dropdown.click();
		hotelBookingElements.DOB_DD_Option.click();
		hotelBookingElements.DOB_MM_Dropdown.click();
		hotelBookingElements.DOB_MM_Option.click();
		hotelBookingElements.DOB_YYYY_Dropdown.click();
		hotelBookingElements.DOB_YYYY_Option.click();
		hotelBookingElements.gender_DropDown.click();
		hotelBookingElements.gender_Option.click();
		hotelBookingElements.saveButton.click();

		/*
		hotelBookingElements.DOB_MM_Option.click();
		hotelBookingElements.DOB_YYYY_Dropdown.click();
		hotelBookingElements.DOB_YYYY_Option.click();
		hotelBookingElements.gender_DropDown.click();
		hotelBookingElements.gender_Option.click();
		hotelBookingElements.saveButton.click();
		hotelBookingElements.email.click();
		hotelBookingElements.email.setValue(travellerDetails.email);
		hotelBookingElements.mobileCode.click();
		hotelBookingElements.mobileCode.setValue(travellerDetails.mobileCode);
		hotelBookingElements.mobileNumber.click();
		hotelBookingElements.mobileNumber.setValue(travellerDetails.mobileNumber);
	*/
	}
}
module.exports = new hotelBooking();
