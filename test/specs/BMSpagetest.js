//shreyas
const HomepageFunction = require("../pageobjects/BMSHomepageFunction");
const FilterFunction = require("../pageobjects/BMSFilterFunction");

describe("testing of BookMyShow website", function(){

    it("Booking a Play with filters applied", function(){
        HomepageFunction.Homepage();
        FilterFunction.SelectDate();
        FilterFunction.SelectLanguage();
        FilterFunction.SelectGenre();
        FilterFunction.SelectPlay(); 

    })
})
