//@Sailokeshwar
const searchPageFlightElements= require("../elements/searchFlightelements");
const searchFlightData=require('../data/searchFlightData');
const { expect } = require("chai");
class flightTraveller{
    adult(){
 
    searchPageFlightElements.firstName.waitForDisplayed({ timeout: 5000 });
    browser.pause(2000);
    searchPageFlightElements.firstName.waitForDisplayed({ timeout: 5000 });
    searchPageFlightElements.firstName.setValue(searchFlightData.firstName);
    searchPageFlightElements.lastName.waitForDisplayed({ timeout: 5000 });
    searchPageFlightElements.lastName.setValue(searchFlightData.lastName);
    searchPageFlightElements.gender.waitForDisplayed({ timeout: 5000 });
    searchPageFlightElements.gender.click();
    expect(browser.getUrl()).to.contains(searchFlightData.flightTravellerurl);
}
    contactInformation(){
        searchPageFlightElements.mobilenumber.waitForDisplayed({ timeout: 5000 });
        searchPageFlightElements.mobilenumber.click();
        searchPageFlightElements.mobilenumber.setValue(searchFlightData.phoneNumber);
        searchPageFlightElements.emailId.waitForDisplayed({ timeout: 5000 });
        searchPageFlightElements.emailId.click();
        searchPageFlightElements.emailId.setValue(searchFlightData.emailId);
    }
    pickUp(){
        searchPageFlightElements.airportPick.waitForDisplayed({ timeout: 5000 });
        searchPageFlightElements.airportPick.click();
        browser.pause(3000);
    }
   
    reviewPageContinue(){
        browser.pause(5000);
        searchPageFlightElements.reviewContinue.waitForDisplayed({ timeout: 10000 });
        searchPageFlightElements.reviewContinue.click();
        browser.pause(3000);
    }
    isReview(){
        searchPageFlightElements.reviewDetails.waitForDisplayed({ timeout: 5000 });
        expect(searchPageFlightElements.reviewDetails).not.false;
        browser.pause(2000);
    }
    confirm(){
        searchPageFlightElements.confirm.waitForDisplayed({ timeout: 5000 });
        searchPageFlightElements.confirm.click();
        browser.pause(2000);
    }

}
module.exports=new flightTraveller();