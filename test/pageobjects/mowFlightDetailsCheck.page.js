const mowFlightDetailsCheckElements=require('../elements/mowFlightDetailsCheck.elements')
const mmtData = require('../data/tripLogin.data')
const elementUtil=require('../../Utilities/elements.util')

class MowFlightDetailsCheckPage{

    flightDetailsCheck(){
        // if(elementUtil.isElementDisplayed(mowFlightDetailsCheckElements.closeButton)){
        //     elementUtil.clickElement(mowFlightDetailsCheckElements.closeButton)
        //     break;
        // }
        elementUtil.clickElement(mowFlightDetailsCheckElements.closeButton)
        browser.pause(5000)
        elementUtil.clickElement(mowFlightDetailsCheckElements.flights)
        elementUtil.clickElement(mowFlightDetailsCheckElements.from)
        elementUtil.setValue(mowFlightDetailsCheckElements.fromSearch,mmtData.fromLocationText)
        elementUtil.clickElement(mowFlightDetailsCheckElements.fromLocation)
        elementUtil.setValue(mowFlightDetailsCheckElements.toSearch,mmtData.toLocationText)
        elementUtil.clickElement(mowFlightDetailsCheckElements.toLocation)
        elementUtil.clickElement(mowFlightDetailsCheckElements.departureDate)
        elementUtil.clickElement(mowFlightDetailsCheckElements.selectDate)
        elementUtil.clickElement(mowFlightDetailsCheckElements.doneButton)
        elementUtil.clickElement(mowFlightDetailsCheckElements.searchFlights)
        // if(elementUtil.isElementDisplayed(mowFlightDetailsCheckElements.indigoFlight)){
        //     elementUtil.clickElement(mowFlightDetailsCheckElements.indigoFlight)
        //     break;
        // }
        elementUtil.scrollElementIntoView(mowFlightDetailsCheckElements.indigoFlight)
        elementUtil.clickElement(mowFlightDetailsCheckElements.indigoFlight)

       // elementUtil.scrollElementIntoView(mowFlightDetailsCheckElements.saver)
        elementUtil.isElementSelected(mowFlightDetailsCheckElements.saverSelection)
        elementUtil.clickElement(mowFlightDetailsCheckElements.servicesPageContinue)
        if(elementUtil.getText(mowFlightDetailsCheckElements.viewFlightDetails)==mmtData.viewFlightDetailsText)
        {
            return true
        }else{
            return false
        }        
    }

}

module.exports=new MowFlightDetailsCheckPage()