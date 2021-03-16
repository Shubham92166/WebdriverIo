//Anmol

const homePage = require("../pageobjects/cabs.page");
const config = require("../data/cab.data");

describe("mmt cabs search",function(){

    it("click on search",function(){

        browser.url("https://www.makemytrip.com/cabs");
        
        browser.pause(1000);

        const rempopup = $('div.loginModal.displayBlock.modalLogin.dynHeight.personal');
        if(rempopup.isExisting()){
        
            rempopup.click();
        }
        

        browser.maximizeWindow();

        homePage.searchCabs();

        homePage.viewPricesAndBookCab();

        homePage.enterAddress();

        browser.pause(5000);

        homePage.checkRadioButton();
      

        homePage.enterName();
        homePage.enterEmail();
        homePage.enterMob();
        
        
    });

});

