const mowFlightDetailsCheckPage = require('../pageobjects/mowFlightDetailsCheck.page')
const mowFlightDetailsCheckElements = require('../elements/mowFlightDetailsCheck.elements')
const assertUtil = require('../../Utilities/assert.util')

describe('Make my trip test',function(){

    it('checking flight details ',function(){
        browser.url('https://www.makemytrip.com/')
        browser.maximizeWindow()
        assertUtil.validateIfTrue(mowFlightDetailsCheckPage.flightDetailsCheck(),"flight details are not displayed")
    })
})