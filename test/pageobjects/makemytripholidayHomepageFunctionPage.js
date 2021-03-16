const makemytripHolidaysPage = require("../elements/makemytripHolidaysPage.elements")
const { expect } = require("chai");

class makemytripholidayHomepageFunctionPage{

       HolidayIcon()
       {
        browser.url("https://www.makemytrip.com/")
        expect(browser.getUrl(), "It's not on current page").to.have.contain("https://www.makemytrip.com");
        const button = makemytripHolidaysPage.holiday_icon;
        button.click()
        browser.pause(5000)
        expect(browser.getUrl(), "It's not on current page").to.have.contain("https://www.makemytrip.com/holidays-india/");
       }

       FromCity()
       {
        const from = makemytripHolidaysPage.fromcity_icon;
        from.click()
        browser.pause(10000);
       const fromname = makemytripHolidaysPage.fromcityname;
       fromname.click()
        browser.pause(5000);
       }

       ToCity()
       {
        const toname = makemytripHolidaysPage.tocityname;
        toname.click()
        browser.pause(5000)
       }

       SearchButton()
       {
        const Search_button = makemytripHolidaysPage.search_button;
        Search_button.click()
        browser.pause(5000)
       }


}

module.exports = new makemytripholidayHomepageFunctionPage();