//@Author: Shubham
const { expect } = require('chai');
const searchData = require('../data/tripSearch.data');
const mmtData = require('../data/tripLogin.data')
const searchElements = require('../elements/mmtSearchPage.element');
const util = require('../../Utilities/elements.util');
class Search {
  mobileSearch() {
    util.clickElement(searchElements.fromCity);
    util.setValue(searchElements.fromCityTextBox, searchData.fromCity);
    util.clickElement(searchElements.autoSuggestTextForFrom);
    util.setValue(searchElements.toCityTexBox, searchData.toCity);
    util.clickElement(searchElements.autoSuggestTextForTo);
    util.clickElement(searchElements.departureDateSelector);
    util.scrollElementIntoView(searchElements.departureDate);
    util.clickElement(searchElements.departureDate);
    util.clickElement(searchElements.calendarDoneButton);
    util.clickElement(searchElements.travellerClass);
    util.clickElement(searchElements.adultIncrement);
    util.clickElement(searchElements.travelSubmit);
    util.clickElement(searchElements.searchButton);
    expect(util.getText(searchElements.departureCity), '').equal('Kolkata');
    expect(util.getText(searchElements.arrivalCity), '').equal('Bengaluru');
    browser.pause(2000);
  }

  mmtMobileSearch(fromLocation,toLocation,date){
    util.clickElement(searchElements.flights)
    util.clickElement(searchElements.from)
    util.setValue(searchElements.fromSearch,mmtData.fromLocationText)
    util.clickElement(fromLocation)
    util.setValue(searchElements.toSearch,mmtData.toLocationText)
    util.clickElement(toLocation)
    util.clickElement(searchElements.departureDateField)
    util.clickElement(date)
    util.clickElement(searchElements.doneButton)
    util.clickElement(searchElements.searchFlights)
    
  }
}
module.exports = new Search();
