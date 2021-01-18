const tripLoginPage = require('../pageobjects/tripLogin.page')

describe("Make my trip test cases",function(){

    it('Booking flight by checking price and flight details',function(){
        browser.url('https://www.makemytrip.com/')
        browser.maximizeWindow()
       // $('.fsw_inputBox.searchCity.inactiveWidget').click()
        assert.isTrue(tripLoginPage.flightBooking())
      // tripLoginPage.flightBooking()

    })


});