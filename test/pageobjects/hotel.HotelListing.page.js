//@Sailokeshwar
const searchPageHotelElements= require("../elements/searchPageHotelElements");
const browserHandle= require("../../Utilities/browserHandleUtility");
const hotelData= require("../data/hotelData.data");
const { expect } = require("chai");

class hotelListingPage{
    searchTabClick(){
        browserHandle.switchToWindowContaining(hotelData.hotelListing);
        expect(browser.getUrl()).to.contain(hotelData.hotelListingUrl);
        searchPageHotelElements.searchForSearchTab.click();
    }
    searchTabSetValue(){
        searchPageHotelElements.searchForSearchTab.setValue(hotelData.hotelSearchTabValue);
        browser.pause(2000);
    }
    clickSearchedHotel(){
        searchPageHotelElements.searchForVivant.waitForDisplayed({ timeout: 30000 });
        searchPageHotelElements.searchForVivant.click();
    }  
    clickForHotelDetails(){
        searchPageHotelElements.VivantaHotelElemen.waitForDisplayed({ timeout: 30000 });
        const element = searchPageHotelElements.VivantaHotelElemen.getText();
        expect(element).to.equals(hotelData.hotelSearchTabValue);
        searchPageHotelElements.VivantaHotelElemen.click();

    }
}
module.exports= new hotelListingPage();