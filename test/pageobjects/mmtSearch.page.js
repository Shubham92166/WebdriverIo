//@Author: Shubham
const {expect} = require('chai');
const searchData=require('../data/tripSearch.data')
const searchElements=require('../elements/mmtSearchPage.element')
const util=require('../../Utilities/elements.util')
class Search{
    mobileSearch(){
        util.clickElement(searchElements.fromCity);
        util.setValue(searchElements.fromCityTextBox,searchData.fromCity);
        util.clickElement(searchElements.autoSuggestTextForFrom);
        util.setValue(searchElements.toCityTexBox,searchData.toCity);
        util.clickElement(searchElements.autoSuggestTextForTo);
        util.clickElement(searchElements.departureDateSelector);
        util.scrollElementIntoView(searchElements.departureDate);
        util.clickElement(searchElements.departureDate)
        util.clickElement(searchElements.calendarDoneButton);
        util.clickElement(searchElements.travellerClass);
        util.clickElement(searchElements.adultIncrement);
        util.clickElement(searchElements.travelSubmit);
        util.clickElement(searchElements.searchButton);
        expect(util.getText(searchElements.departureCity)).equal("Kolkata");
        expect(util.getText(searchElements.arrivalCity)).equal("Bengaluru");
    }
}
module.exports=new Search();

