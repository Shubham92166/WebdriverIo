
const tripLoginElements = require('../elements/tripLogin.elements')
const browserUtil = require('../../utilities/browser.util')
const tripLoginData = require('../data/tripLogin.data')

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
       loginelem.EmailID.setValue(data.Email);
       loginelem.continue.click();
       loginelem.password.setValue(data.Password);
       loginelem.login.click();
   }

   

   


    flightBooking(){
        tripLoginElements.fromBox.click()
        tripLoginElements.from.setValue(tripLoginData.fromText)
        tripLoginElements.fromLocation.click()
        tripLoginElements.toBox.click()
        tripLoginElements.to.setValue(tripLoginData.toText)
        tripLoginElements.toLocation.click()
        browser.pause(2000)
        tripLoginElements.departureDate.click()
        tripLoginElements.searchButton.click()
        if(tripLoginElements.flightDetailsButton.getText()===tripLoginData.flightDetailsText && tripLoginElements.viewPrices.getText()===tripLoginData.viewPricesText)
        {
            tripLoginElements.viewPrices.click()
           // tripLoginElements.lowFareBooknowButton.scrollIntoView()
            let currentWindowHandle = browser.getWindowHandle()
            tripLoginElements.lowFareBooknowButton.click()       
            browser.pause(2000)
            let AllWindowHandles = browser.getWindowHandles()
            for (let handle of AllWindowHandles){
                if(handle!=currentWindowHandle){
                    browser.switchToWindow(handle)
                    break
                }
                
            }
            
            //browserUtil.switchToWindowContaining(tripLoginElements.title)
            if(tripLoginElements.reviewYourBooking.getText().includes(tripLoginData.reviewYourBookingText))
            return true
        }
        else{
            return false
        }

    }


}
module.exports=new tripLoginPage(); 