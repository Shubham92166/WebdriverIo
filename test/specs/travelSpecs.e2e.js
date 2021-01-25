const searchPage=require('../pageobjects/travelSearch.page');
const filterPage=require('../pageobjects/travelFilter.page');
const { allFlight } = require('../pageobjects/travelSearch.page');
const {expect}=require("chai");
describe("Flight Booking", function(){
it.skip("Searching flight", function(){
    browser.url('/');
    elem=$('//div[@data-cy="outsideModal"]');
    if(elem.isDisplayed()){
        elem.moveTo(0,0)

    }
    browser.maximizeWindow()
    searchPage.searchFlight();
    searchPage.sortingFlights();
    allFlight();
    /*
    let listOfElements = $$("")
        let prices = listOfElements.map(element => element.getText().replace(/,/g, "").match(/[0-9]+/)[0])
        
        for (let i=0; i<prices.length-1; i++) expect(prices[i]< prices[i+1]).to.be.true
    let elem =    $("//p[contains(text(), 'Go Air')]/ancestor::label[contains(@for, 'newGroupFilter')]/span/span[@class='check']")
        elem.click()
       

        let listOfElements = $$(".airways-name")
        let listOfFlightName = listOfElements.forEach(elem => {
            return elem.getText();
        })
        for(let flight of listOfFlightName)
            expect(flight.includes('Go Air'), "Filter is not working.").to.be.true
        */
    filterPage.filterFlight();

 browser.pause(2000);
});
});