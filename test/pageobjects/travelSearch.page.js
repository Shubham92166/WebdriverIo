const searchElements=require('../elements/travelSearch.elements');
const {expect}=require("chai");
class travelSearchPage{
    searchFlight(){
        searchElements.searchButton.click();
    }
    sortingFlights(){
        searchElements.sortingResult.click();
    }
    allFlight(){
        let flightList=searchElements.allFlightList;
        for(var i=0;i<flightList.length;i++){
            //let flightText=flightList[i].getText();
            //console.log(flightText);
            /*
            
            //expect(priceOfFirstFlight).to.equal(priceOfSecondFlight);
            let price1=(priceOfFirstFlightText.split('')).split(',');
            let priceOfFirstFlight=price1[2];
            console.log(parseInt(priceOfFirstFlight));
            //expect(priceOfFirstFlight == priceOfSecondFlight, "").to.be.false;
            console.log(priceOfFirstFlightText);
            console.log(priceOfSecondFlightText);
            */
           var priceOfFirstFlightText=searchElements.price(1).getText();
           var secondFlight=searchElements.price(5).getText();
           //console.log("The second flight"+secondFlight);
        let Price= [priceOfFirstFlightText,secondFlight];
      
        //console.log("The price array is "+Price)
            let prices = Price.map(element => element.replace(/,/g, "").match(/[0-9]+/));
        
        for (let i=0; i<prices.length-1; i++) {
        //console.log("Inside loop"+prices[i]);

        //console.log(prices[i+1]);
            expect(prices[i]> prices[i+1]).to.be.true;

        }
        }
    }
}
module.exports=new travelSearchPage();
