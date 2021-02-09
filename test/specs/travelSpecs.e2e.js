const searchPage=require('../pageobjects/travelSearch.page');
const filterPage=require('../pageobjects/travelFilter.page');
const { allFlight } = require('../pageobjects/travelSearch.page');
const {expect}=require("chai");

//@Author:Shubham 
describe("Flight Booking", function(){
it("Searching flight", function(){
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