const searchPage=require('../pageobjects/travelSearch.page');
const filterPage=require('../pageobjects/travelFilter.page');
const { allFlight } = require('../pageobjects/travelSearch.page');
const {expect}=require("chai");

//@Author:Shubham 
describe("Flight Booking", function(){
<<<<<<< HEAD
it.skip("Searching flight", function(){
=======
    it("Searching flight", function(){
>>>>>>> 21d141e699569ba43f34324941f5657b94e64b3d
    browser.url('/');
    
    //browser.maximizeWindow()
    searchPage.searchFlight();
    searchPage.sortingFlights();
    allFlight();
    filterPage.filterFlight();
    filterPage.filterDisplayed();
    filterPage.filterText();

 browser.pause(2000);
});
});