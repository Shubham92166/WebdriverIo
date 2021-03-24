const homePage = require('../pageobjects/bms.home.page')
const sportspage = require('../pageobjects/sports.page')
const playmania = require('../pageobjects/Play.mania')


describe('Football', function(){

    it('Events', function(){

        //open BMS
        homePage.sectionHome();
        homePage.closeUpdates();

        //SelectCity
        homePage.selectBangalore();

        //Open Sports
        homePage.openSports();

        //Window Change
        sportspage.windowChange();

        //Add football filter
        sportspage.ClickCategory();
        sportspage.filterFootball();
        sportspage.openPlayMania();

        //Window Change Playmania
        playmania.windowChange();

        //Validate if Book button is visible
        playmania.bookButton()
        

        //Validate if book button is clickable
        playmania.ClickVerify();

        //Verify Location
        playmania.location();

        //Verify if price is visible
        playmania.price();





    
    
    })

})   
