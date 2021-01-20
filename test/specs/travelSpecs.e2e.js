const searchPage=require('../pageobjects/travelSearch.page');
const filterPage=require('../pageobjects/travelFilter.page');
const { allFlight } = require('../pageobjects/travelSearch.page');
const {expect}=require("chai");
//@Author:Shubham 
describe("Flight Booking", function(){
    it("Searching flight", function(){
    browser.url('/');
    elem=$('//div[@data-cy="outsideModal"]');
    if(elem.isDisplayed()){
        elem.moveTo(0,0)

    }
    browser.maximizeWindow()
    searchPage.searchFlight();
    searchPage.sortingFlights();
    allFlight();
    filterPage.filterFlight();
    filterPage.filterDisplayed();
    filterPage.filterText();

 browser.pause(2000);
});
});