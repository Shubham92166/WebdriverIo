const tripLoginElements = require("../elements/tripLogin.elements");
const tripLoginPage = require("../pageobjects/tripLogin.page");
const browserUtil = require('../../utilities/browser.util')

describe("Make my trip test cases",function(){

it('Book a flight',function(){
    browser.url("https://makemytrip.com");
    tripLoginPage.flightBooking()
    browser.pause(2000)
})

})