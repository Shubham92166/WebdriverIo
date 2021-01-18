const filterElements=require("../elements/travelFilter.elements")
const {expect}=require("chai");
class travelFilterPage{
    filterFlight(){
        filterElements.fiterFlight.click();
        browser.pause(5000);
        expect(filterElements.fiterFlight.getAttribute("data-ischecked")).to.have.contain("true");
        let listOfElements = $$(".airways-name")
        //console.log(listOfElements[0].getText;
        for(let i=0;i<listOfElements.length;i++){
            var listOfFlightName=[];
            listOfFlightName.push(listOfElements[i].getText());
        }
        //console.log(listOfFlightName)
        for(let flight of listOfFlightName)
            expect(flight).to.have.contain('Go Air')
    
    }

} 
module.exports=new travelFilterPage();