const homeElements=require('../elements/mow.Home.elements')
const searchData=require('../data/tripSearch.data')
class mobileSearchFlight{
    mobileSearchFlight(){
        homeElements.closeButton.waitForDisplayed();
        homeElements.closeButton.click();
        homeElements.flightsButton.click();
        homeElements.toCity.click();
        homeElements.toCityTexBox.setValue(searchData.toCity);
        //browser.pause(5000);
        homeElements.autoSuggestText.click();
        homeElements.searchButton.click();
    }
}
module.exports=new mobileSearchFlight();
