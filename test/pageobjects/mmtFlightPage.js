//@Sailokeshwar
const searchFlightData=require('../data/searchFlightData');
const browserHandle = require('../../Utilities/browserHandleUtility');
const searchPageFlightElements= require("../elements/searchFlightelements");
const tripSelectionHeader= require('../../Utilities/tripSelectionUtility');
const { expect } = require("chai");
class flightPage{
    tripMode(){
        browserHandle.switchToWindowContaining(searchFlightData.flightPageText);
        expect(browser.getTitle()).to.equal(searchFlightData.flightTitle);
        tripSelectionHeader.specificChildElement(2).click();
        browser.pause(2000);
    }
    from(){
     searchPageFlightElements.flightFrom.click();
     searchPageFlightElements.setValueInFrom.setValue(searchFlightData.setValueFrom);
     browser.pause(2000)
     searchPageFlightElements.flightFromLucknow.click();
     browser.pause(2000);
    }
    to(){
        searchPageFlightElements.setValueInTo.setValue(searchFlightData.setValueTo);
        searchPageFlightElements.flightFromDelhi.click();
        browser.pause(1000);
    }
    date(){
        searchPageFlightElements.firstDate.click();
        searchPageFlightElements.secondDate.click();
    }
    search(){
        searchPageFlightElements.searchButton.click();
    }
}
module.exports=new flightPage();