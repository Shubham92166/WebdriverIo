const filterElements=require('../elements/mmtFilters.elements');
const util=require('../../Utilities/elements.util');
const { expect } = require('chai');
class Filters{
    FlightFilters(){
        var flights=[];
        util.clickElement(filterElements.filterBars);
        util.clickElement(filterElements.filtersTab); 
        util.scrollElementIntoView(filterElements.Airline);
        util.clickElement(filterElements.Airline); 
        util.clickElement(filterElements.applyButton);
        let listOfFlights=filterElements.allFlights;
        for(let i=1;i<listOfFlights.length;i++){
            flights.push(util.getText(filterElements.airlinesName(i))); 
        }
        for( let flight of flights){
            expect(flight).to.have.contain("AirAsia");
        }
        }
}
module.exports=new Filters();
