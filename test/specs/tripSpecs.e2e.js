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

});