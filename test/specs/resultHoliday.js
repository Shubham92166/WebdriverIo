//Nithin
const homePage = require("../pageobjects/hol_home.page")
const HolPage = require("../pageobjects/holiday.page")

describe('Holiday', function(){

    it('Result', function(){

        //open MMT
        homePage.sectionHome();

        //clickHoliday
        homePage.clickHoliday();

        //searchDest
        homePage.searchDest();

        //Switch to HolidayPage
        HolPage.windowChange();
        
        //Filters and Validation
        HolPage.validationPage();

    })
})


