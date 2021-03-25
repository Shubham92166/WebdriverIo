//shreyas
const HomepageElements = require("../elements/BMSHomepage.elements");
const BMSdata = require("../data/BMSdata");
const { expect } = require("chai");

class BMSHomepageFunction{
    Homepage(){
     browser.url(BMSdata.BMSurl);
     expect(browser.getUrl()).equals(BMSdata.BMSurl);
     browser.pause(5000);
    // browser.maximizeWindow();
     browser.pause(3000);
     HomepageElements.popup.click();
     browser.pause(3000);
     HomepageElements.RequiredCity.click();
     browser.pause(3000);
     HomepageElements.plays.click();
    }

}

module.exports = new BMSHomepageFunction();