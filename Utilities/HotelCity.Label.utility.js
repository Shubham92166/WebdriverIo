//@Sailokeshwar
const searchPageHotelElements= require("../test/elements/searchPageHotelElements");
class selectHotelCity{
    
    get parent(){
         return searchPageHotelElements.HotelCitySuggestionELement;
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
module.exports= new selectHotelCity();