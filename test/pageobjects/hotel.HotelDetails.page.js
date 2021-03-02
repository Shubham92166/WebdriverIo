//@Sailokeshwar
const searchPageHotelElements= require("../elements/searchPageHotelElements");
const browserHandle= require("../../Utilities/browserHandleUtility");
const hotelData= require("../Data/hotelData.data");
const { expect } = require("chai");
class hotelDetailsPage{
    hd_BreakfastCheckBox(){
        browserHandle.switchToWindowContaining(hotelData.hotelDetails);
        expect(browser.getUrl()).to.contain(hotelData.hotelDetailsUrl);
        searchPageHotelElements.hd_BreakfastCheckBox.waitForDisplayed({ timeout: 30000 });
        const element1=searchPageHotelElements.hd_BreakfastCheckBox;
        expect(element1).not.false;
        searchPageHotelElements.hd_BreakfastCheckBox.click();
    }
    booknow(){    
        const elem = searchPageHotelElements.booknow;
        elem.waitForDisplayed({ timeout: 30000 });
        elem.click();
        browser.pause(3000);

    }
}
module.exports=new hotelDetailsPage();