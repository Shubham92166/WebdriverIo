const data =require('../data/tripLogin.data');
//const { EmailID } = require('../elements/tripLogin.elements');
const loginelem=require('../elements/tripLogin.elements')
const tripLoginElements = require('../elements/tripLogin.elements')


class tripLoginPage{
    flightBooking()
    {
        tripLoginElements.fromcity.click()
        tripLoginElements.fromLocation.click()
        tripLoginElements.tocity.click()
        tripLoginElements.toLocation.click()
        tripLoginElements.setdate.click()
        tripLoginElements.searchButton.click()
    }


   login () {
    
       loginelem.loginBtn.click();
       //browser.clearElement(loginelem.EmailID);
       loginelem.EmailID.setValue(data.username);
       loginelem.continue.click();
       loginelem.password.setValue(data.password);
       loginelem.login.click();
   }

   

   

}
module.exports=new tripLoginPage(); 