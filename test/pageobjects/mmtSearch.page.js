const searchEle = require('../elements/mmtSearchPage.elements')
const browserUtil = require('../../utilities/browser.util')
const tripLoginData = require('../data/tripLogin.data')
const util=require('../../Utilities/elements.util')

class searchPage{

    flightBookingTrip(from,to)
    {
        searchEle.fromBox.click()
        searchEle.fromcity.setValue(from)
        searchEle.fromPlace.click()
        searchEle.tocity.setValue(to)
        searchEle.toPlace.click()
        searchEle.setdate.click()
        searchEle.search.click()
        
    }
}
module.exports=new searchPage(); 