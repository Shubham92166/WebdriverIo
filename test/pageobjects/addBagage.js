
const extraBagage = require('../elements/addBagage.elements');
const browserUtil = require('../../utilities/browser.util');


class addExtraBaggage {

   


    bagage(){
        
        extraBagage.viewprice.click();
        browser.pause(3000);
        extraBagage.booknow.click();
        browser.switchWindow('/flight/review');
        
        if(extraBagage.addExtrabagageText.isExisting()){

            console.log("Add Bagage option available")

            extraBagage.checkinExtraBag.click(); 
            browser.pause(5000);
            extraBagage.done.click();

        } else {

            console.log("Add Bagage option not available")
        }  

          
     
    }

}

module.exports=new addExtraBaggage();