const searchElements=require('../elements/travelSearch.elements');
const {expect}=require("chai");
//const { login } = require('../pageobjects/tripLogin.page');
//@Author:Shubham 
class travelSearchPage{
    searchFlight(){
        //elem=$('//div[@data-cy="outsideModal"]');
        //if(elem.isDisplayed()){
        //login();

    //}
        searchElements.searchButton.click();
    }
    sortingFlights(){
        searchElements.sortingResult.click();
    }
    allFlight(){
        let flightList=searchElements.allFlightList;
        for(var i=0;i<flightList.length;i++){
            var priceOfFirstFlightText=searchElements.price(1).getText();
           var secondFlight=searchElements.price(5).getText();
        let Price= [priceOfFirstFlightText,secondFlight];
            let prices = Price.map(element => element.replace(/,/g, "").match(/[0-9]+/));
        
        for (let i=0; i<prices.length-1; i++) {
            expect(prices[i]> prices[i+1]).to.be.true;

        }
        }
    }
}
module.exports=new travelSearchPage();
