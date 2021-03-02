//@Sailokeshwar
const mainPageSectionHeader=require("../pageobjects/main.SectionHeader.mainPage");
const searchHotel=require("../pageobjects/hotelSearch.mainPage");
const hotelListing=require("../pageobjects/hotel.HotelListing.page");
const hotelDetails=require("../pageobjects/hotel.HotelDetails.page");
describe('MakeMyTripTestCases', function(){
   it('selectOption', function(){
      //mainpage header
      mainPageSectionHeader.sectionHeader();
      mainPageSectionHeader.clickHotel();
      //hotelsearch
      searchHotel.searchHotel();
      //hotel-ListingPage
      hotelListing.searchTabClick();
      hotelListing.searchTabSetValue();
      hotelListing.clickSearchedHotel();
      hotelListing.clickForHotelDetails();
      //hotelDetails
      hotelDetails.hd_BreakfastCheckBox();
      hotelDetails.booknow();     
    });  
});
