//@Sailokeshwar
const searchPageFlightElements= require("../test/elements/searchFlightelements");
class mmtFlightTripSeclection{

    get parent(){
    return searchPageFlightElements.sectionFlightTripMode;
    }
    get childElements(){
    return this.parent.$$('li');
    }
    get getTextFromLi(){
    return this.childElements.filter(element =>{
        console.log(element.getText());
    });
    }
    specificChildElement(index){
    return this.parent.$(`li:nth-child(${index})`);
    }      

}
module.exports= new mmtFlightTripSeclection();