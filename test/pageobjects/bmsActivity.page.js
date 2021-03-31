//Himadree
const { expect } = require("chai");
const bmsActiv = require("../elements/bookMyShowActivities.elements")
const bmsData = require("../data/bms.data")

class bmsActivity {

    bmsHomePage() 
    {
        browser.url(bmsData.url);
        browser.maximizeWindow();
        bmsActiv.closePopup.click();
    }

    bmsCityClick()
    {
        bmsActiv.selectCity.waitForDisplayed({ timeout: 10000 })
        bmsActiv.selectCity.click();
        expect(browser.getUrl()).to.contain(bmsData.cityUrl);
        browser.pause(2000);
    }

    clickActivity()
    {
        bmsActiv.activityLink.waitForDisplayed({ timeout: 10000 })
        bmsActiv.activityLink.click();
        expect(browser.getUrl()).to.contain(bmsData.activityUrl);
        browser.pause(2000);
    }

    filterTomm()
    {
        bmsActiv.filterOne.waitForDisplayed({ timeout: 5000 })
        bmsActiv.filterOne.click();
        browser.pause(2000);
    }
    moreFilter()
    {
        bmsActiv.moreFilters.click();
        browser.pause(2000);

    }
    outdoorFilter()
    {
        bmsActiv.filterTwo.click();
    }

    selectShow()
    {
        bmsActiv.selectShow.waitForDisplayed({ timeout: 5000 })
        bmsActiv.selectShow.click();
        
    }
    bookShow()
    {
        bmsActiv.bookShow.waitForDisplayed({ timeout: 5000 })
        bmsActiv.bookShow.click();
        expect(browser.getUrl()).to.contain(bmsData.showUrl);
        browser.pause(2000);

    }
    
}

module.exports = new bmsActivity();
