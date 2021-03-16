//Nithin
const Util = require("../../Utilities/hol_elementutil")
const HolidayPage = require("../elements/holidayElements")
const holidayData = require("../data/holiday.data")
const assertUtil = require("../../Utilities/assert.util")



class HolPage{

    windowChange(){
        Util.switchToWindowContaining(holidayData.holidayPageURL)
        browser.pause(2000)
        
    }


    validationPage(){

        if(HolidayPage.elem2.getText === "EXPERIENCE BEACHES AND SUNSET"){

            Util.Click(HolidayPage.fiveStar2)
            Util.Click(HolidayPage.moreFilters)
            Util.Click(HolidayPage.flights2)

        
            const resultDisplayed2 = HolidayPage.listofResults2.length
            assertUtil.validateIfIsAtLeast( resultDisplayed2, 1, "No holiday Packages Displayed")
            
        
        }

        else if(HolidayPage.elem.getText === "Holidays In Goa") {
            
            Util.Click(HolidayPage.fiveStar) 
            Util.Click(HolidayPage.flights)

            const resultDisplayed = HolidayPage.listofResults.length
            assertUtil.validateIfIsAtLeast( resultDisplayed, 1, "No holiday Packages Displayed")
            console.log("test successful")
        }

        
        browser.pause(5000)

        
    }


    
}    

module.exports = new HolPage