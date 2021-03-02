//@Sailokeshwar
const mmtSectionHeader = require("../../Utilities/mmt.Page.Section.HeaderUtility");
const hotelData= require("../data/hotelData.data");
const { expect } = require("chai");
class mainSectionHeaderPage{
    sectionHeader(){
      browser.url('/');
      expect(browser.getTitle()).to.have.contain(hotelData.textMakeMyTrip);
      let bHandle = browser.getWindowHandle();
      console.log(bHandle);
      browser.maximizeWindow();  
    }
    clickHotel(){
    //hotel click
    mmtSectionHeader.specificChildElement(2).click();
    browser.pause(2000);
    expect(browser.getUrl()).to.equal(hotelData.hotelUrl);
    }
}
module.exports= new mainSectionHeaderPage();