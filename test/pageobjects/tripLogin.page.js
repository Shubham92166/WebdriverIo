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

}
module.exports=new tripLoginPage(); 