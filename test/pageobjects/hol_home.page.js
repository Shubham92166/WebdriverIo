//Nithin
const Util = require("../../Utilities/hol_elementutil")
const HolidayPage = require("../elements/holidayElements")
const holidayData = require("../data/holiday.data")


class homePage{

    sectionHome(){
        browser.url('/');
        browser.maximizeWindow();
    } 

    clickHoliday(){
        Util.Click(HolidayPage.holidayPage);
    }

    searchDest(){
        Util.Click(HolidayPage.fromLocation)
        Util.Click(HolidayPage.fromCity)
        Util.Click(HolidayPage.toCity)
        Util.Click(HolidayPage.searchBtn)
    }     

  



}

module.exports = new homePage