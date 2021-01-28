
const tripLoginPage = require('../pageobjects/tripLogin.page')
const tripLoginElements = require('../elements/tripLogin.elements')
const browserUtil = require('../../utilities/browser.util')
const triplogin=require('../pageobjects/tripLogin.page')
const tripData=require('../data/tripLogin.data')
const assert = require("assert");


describe("Make my trip test cases",function(){

    it('Book a flight',function()
    {
        browser.url("https://makemytrip.com");
        tripLoginPage.flightBookingTrip("Mumbai","Delhi")
        browser.pause(2000)
        browser.saveScreenshot('./test/screenshot/pageview2.png')
        let fromloc = $("#fromCity");
        let toloc = $("#toCity");
        let depart = $("#departure");
        let ret = $ ("#return");
        let data1=tripData.fromDestination;
        let data2=fromloc.getText();
        let data3=tripData.toDestination;
        let data4=toloc.getText();
        if ((data1==data2) && (data3==data4))
        {
        console.log("From Location : "+fromloc.getText()+" To Location : "+toloc.getText());
        console.log("Departure :"+depart.getText()+" Return :"+ret.getText());
        }

    }),



    it('Booking flight by checking price and flight details',function(){
       browser.url('https://www.makemytrip.com/')
       browser.maximizeWindow()
       // $('.fsw_inputBox.searchCity.inactiveWidget').click()
        assert.isTrue(tripLoginPage.flightBooking())
       tripLoginPage.flightBooking()

    }), 
  
   it("Logging into MakeMyTrip", function(){

        browser.url('/')
        browser.pause(3000)
        browser.maximizeWindow()
        browser.pause(3000)
        triplogin.login();
        assert.strictEqual(browser.getTitle(), "MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");  
    })



    
});