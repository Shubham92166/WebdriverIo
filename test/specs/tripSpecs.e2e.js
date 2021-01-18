const tripLoginPage = require('../pageobjects/tripLogin.page')

describe("Make my trip test cases",function(){

    it('Booking flight by checking price and flight details',function(){
        browser.url('https://www.makemytrip.com/')
        browser.maximizeWindow()
       // $('.fsw_inputBox.searchCity.inactiveWidget').click()
        assert.isTrue(tripLoginPage.flightBooking())
      // tripLoginPage.flightBooking()

    })

const browserUtil = require('../../utilities/browser.util');
const triplogin=require('../pageobjects/tripLogin.page')
const assert = require("assert");

describe("Make my trip test cases",function(){

    it("Logging into MakeMyTrip", function(){

        browser.url('/')
        browser.pause(3000)
        browser.maximizeWindow()
        browser.pause(3000)
        triplogin.login();
        assert.strictEqual(browser.getTitle(), "MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");  
    })
})
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