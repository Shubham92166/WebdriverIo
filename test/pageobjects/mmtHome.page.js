//@Author: Shubham
const homeElements=require('../elements/mmtHomePage.elements')
const util=require('../../Utilities/elements.util');
class Home{
    home(){
        util.clickElement(homeElements.closeButton);
        util.clickElement(homeElements.flightsButton);
    }
}
module.exports=new Home();

