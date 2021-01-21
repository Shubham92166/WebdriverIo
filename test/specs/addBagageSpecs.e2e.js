const searchPage=require('../pageobjects/travelSearch.page');
const addExtraLagguage = require ('../pageobjects/addBagage');
const searchflight=require('../pageobjects/travelSearch.page');

describe ("Adding Extra baagage", function(){

it("add baggage", function(){

    browser.url('/');

   
    browser.maximizeWindow();

    
    
    searchflight.searchFlight();

    browser.pause(6000);
    addExtraLagguage.bagage()

})


})
