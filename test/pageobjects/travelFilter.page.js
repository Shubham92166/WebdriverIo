const filterElements=require("../elements/travelFilter.elements")
const {expect}=require("chai");
//@Author:Shubham 
class travelFilterPage{
    filterFlight(){
        filterElements.fiterFlight.click();
        browser.pause(5000);
        expect(filterElements.fiterFlight.getAttribute("data-ischecked")).to.have.contain("true");
        let listOfElements = $$(".airways-name");
        for(let i=0;i<listOfElements.length;i++){
            var listOfFlightName=[];
            listOfFlightName.push(listOfElements[i].getText());
        }
        
        for(let flight of listOfFlightName)
            expect(flight).to.have.contain('Go Air');
    
    }
    filterDisplayed(){
        browser.pause(5000);
        filterElements.displayFilter.waitForDisplayed();
        let displayed=filterElements.displayFilter.isDisplayed();
        expect(displayed).to.be.true;   
    }
    
    filterText(){
        filterElements.displayFilter.waitForExist({timeout: 5000});
        let text=filterElements.displayFilterName.getText();
        expect(text).to.equal("Go Air");
    }
    
} 
module.exports=new travelFilterPage();