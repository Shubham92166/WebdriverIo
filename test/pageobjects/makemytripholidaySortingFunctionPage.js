const makemytripSortingPage = require("../elements/makemytripSortingPage.elements")
const { expect } = require("chai");

class makemytripholidaySortingFunctionPage{
    
    SortByStars(){
        const stars = makemytripSortingPage.hotelCategory;
        stars.click()
        browser.pause(5000)
    }

    FourStarPlace()
    {
        const place_name = makemytripSortingPage.place;
        console.log(place_name.getText())
        place_name.click()
        browser.pause(5000)
        expect(place_name.getText()).equals("Exquisite Kerala Flight Inclusive Deal")
        place_name.waitForDisplayed()
        browser.pause(5000)
    }



}
module.exports = new makemytripholidaySortingFunctionPage();