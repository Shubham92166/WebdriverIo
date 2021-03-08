//@Sailokeshwar
const searchFlightData=require('../data/searchFlightData');
const browserHandle = require('../../Utilities/browserHandleUtility');
const searchPageFlightElements= require("../elements/searchFlightelements");
const { expect } = require("chai");

class flightSearch{
    clickIndigoFilter1(){
        browserHandle.switchToWindowContaining(searchFlightData.flightSearchText);
        expect(browser.getUrl()).to.contain(searchFlightData.flightSearchUrl);
        searchPageFlightElements.filterIndigo.click();
    }
    sliderHandleFilter2(){
        searchPageFlightElements.sliderHandler1.dragAndDrop({x:-50,y:0});
        browser.pause(1000);
    }
    departureFilter3(){
        searchPageFlightElements.departure1.click();
        browser.pause(2000)
        searchPageFlightElements.departure2.click();
        browser.pause(1000);
        searchPageFlightElements.departure2.click();
    }
    selectFlightFilter4(){
        searchPageFlightElements.selectFlight1.click();
        browser.pause(2000);
        searchPageFlightElements.selectFlight2.click();
    }
    bookNow(){
        searchPageFlightElements.bookNow.click();
        browser.pause(2000);
    }
    continue(){
        searchPageFlightElements.continue.waitForDisplayed({ timeout: 30000 });
        searchPageFlightElements.continue.click();
    }
}
module.exports = new flightSearch();