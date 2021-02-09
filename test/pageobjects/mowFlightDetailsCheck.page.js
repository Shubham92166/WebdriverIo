const mowFlightDetailsCheckElements=require('../elements/mowFlightDetailsCheck.elements')
const mmtData = require('../data/tripLogin.data')
const elementUtil=require('../../Utilities/elements.util')
const mobileSearchPage=require('../pageobjects/mmtSearch.page')
const mobileLoginPage=require('../pageobjects/mmtLogin.page')

class MowFlightDetailsCheckPage{

    flightDetailsCheck(){
        mobileLoginPage.mobileLogin()
        browser.pause(5000)
        mobileSearchPage.mmtMobileSearch(mowFlightDetailsCheckElements.fromLocation,mowFlightDetailsCheckElements.toLocation,mowFlightDetailsCheckElements.selectDate)
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