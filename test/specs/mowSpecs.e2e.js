const mobileSearchPage=require('../pageobjects/mow.SearchFlight.page');
//const filterPage=require('../pageobjects/travelFilter.page');
//const { allFlight } = require('../pageobjects/travelSearch.page');
const {expect}=require("chai");

//@Author:Shubham 
describe("Flight Booking in mobile browser", function(){
    it("Searching flight", function(){
    browser.url('/');
    mobileSearchPage.mobileSearchFlight();
    browser.pause(2000);
});

});