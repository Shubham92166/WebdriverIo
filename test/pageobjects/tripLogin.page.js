const tripLoginElements = require('../elements/tripLogin.elements')
const browserUtil = require('../../utilities/browser.util')

class tripLoginPage{

    flightBooking(){
        tripLoginElements.fromBox.click()
        tripLoginElements.from.setValue(tripLoginElements.fromText)
        tripLoginElements.fromLocation.click()
        tripLoginElements.toBox.click()
        tripLoginElements.to.setValue(tripLoginElements.toText)
        tripLoginElements.toLocation.click()
        browser.pause(2000)
        tripLoginElements.departureDate.click()
        tripLoginElements.searchButton.click()
        if(tripLoginElements.flightDetailsButton.getText()===tripLoginElements.flightDetailsText && tripLoginElements.viewPrices.getText()===tripLoginElements.viewPricesText)
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
            if(tripLoginElements.reviewYourBooking.getText().includes(tripLoginElements.reviewYourBookingText))
            return true
        }
        else{
            return false
        }

    }

}
module.exports=new tripLoginPage(); 