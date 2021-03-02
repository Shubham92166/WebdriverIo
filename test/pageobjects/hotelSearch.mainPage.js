//@Sailokeshwar
const selectHotelCity= require("../../Utilities/HotelCity.Label.utility");
const searchPageHotelElements= require("../elements/searchPageHotelElements");
 class searchHotelMainPage{
    searchHotel(){
        searchPageHotelElements.searchElements.click();
        selectHotelCity.specificChildElement(8).click();
        searchPageHotelElements.searchClickDate.click();
        searchPageHotelElements.searchSelectStartDate.click();
        searchPageHotelElements.searchSelectEndDate.click();
        searchPageHotelElements.searchSelectForGuest.click();
        browser.pause(1000);
        searchPageHotelElements.searchSelectApply.click();
        browser.pause(1000);
        searchPageHotelElements.searchSearchElement.click();
    }

}
module.exports= new searchHotelMainPage(); 