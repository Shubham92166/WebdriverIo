//@Sailokeshwar
const mmtSectionHeader = require("../../Utilities/mmt.Page.Section.HeaderUtility");
const flightData= require("../data/searchFlightData");
const { expect } = require("chai");
class mainSectionHeaderPage{
    sectionHeader(){
      browser.url('/');
      expect(browser.getTitle()).to.have.contain(flightData.textMakeMyTrip);
      let bHandle = browser.getWindowHandle();
      console.log(bHandle);
      browser.maximizeWindow();  
    }
    clickFlight(){
    //hotel click
    mmtSectionHeader.specificChildElement(1).click();
    browser.pause(2000);
    expect(browser.getUrl()).to.equal(flightData.flightUrl);
    }
}
module.exports= new mainSectionHeaderPage();