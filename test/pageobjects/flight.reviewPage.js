//@Sailokeshwar
const browserHandle = require('../../Utilities/browserHandleUtility');
const searchPageFlightElements= require("../elements/searchFlightelements");
const searchFlightData=require('../data/searchFlightData');
const { expect } = require("chai");
class flightReview{
    clickNO(){
        browserHandle.switchToWindowContaining(searchFlightData.flightReviewText);
        expect(browser.getUrl()).to.contains(searchFlightData.flightReviewUrl);
        browser.pause(3000);
        searchPageFlightElements.clickNo.waitForDisplayed({ timeout: 5000 });
        searchPageFlightElements.clickNo.click();
        browser.pause(4000);
    }
    reviewContinue(){
        searchPageFlightElements.reviewContinue.scrollIntoView();
        searchPageFlightElements.reviewContinue.waitForDisplayed({ timeout: 10000 });
        browser.pause(6000);
        searchPageFlightElements.reviewContinue.click();
        
    }
}
module.exports=new flightReview();