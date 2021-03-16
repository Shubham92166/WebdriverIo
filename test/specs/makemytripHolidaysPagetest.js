const makemytripholidayHomepageFunctionPage = require("../pageobjects/makemytripholidayHomepageFunctionPage")
const makemytripholidaySortingFunctionPage = require("../pageobjects/makemytripholidaySortingFunctionPage")


describe("Details of makemytrip Holiday page",function(){

    it("searching for holiday_icon and entering from and to address",function(){
       
        makemytripholidayHomepageFunctionPage.HolidayIcon()
        makemytripholidayHomepageFunctionPage.FromCity()
        makemytripholidayHomepageFunctionPage.ToCity()
        makemytripholidayHomepageFunctionPage.SearchButton()
        makemytripholidaySortingFunctionPage.SortByStars()
        makemytripholidaySortingFunctionPage.FourStarPlace()

    });

    


});
