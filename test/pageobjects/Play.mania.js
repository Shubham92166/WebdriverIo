const Elem = require('../elements/bms.football.elements')
const Util = require('../../Utilities/bms.football.Util')
const Data = require('../data/bms.football.data')
const { expect} = require('chai')
//const {expect} = require('expect-webdriverio').setOptions({ wait: 5000 })


class playmania{

    windowChange(){
        Util.switchToWindowContaining(Data.sportsMania)
    }

    bookButton(){
        if(Elem.BookingButton.isDisplayed()){
            console.log("Book button is displayed")
        };
        //expect(Elem.BookingButton).toBeDisplayed()
    }

    ClickVerify(){
        if(Elem.BookingButton.isClickable()){
            console.log("Book button is clickable")
        };
        //expect(Elem.BookingButton).toBeClickable()
    }

    location(){
        expect(Elem.Location.getText()).to.contain(Data.location)
    }

    price(){
        expect(Elem.Price.getText()).to.contain("₹")
    }





}

module.exports = new playmania