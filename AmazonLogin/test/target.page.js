const landingPage = require("../pages/landingPage")

const loginpage=require('../pages/loginPage')
const dataval=require('../Data/data');
const prod=require('../pages/SpecificProduct')
const specific=require('../pages/SpecificProduct')


describe("Interaction with web elements", function(){
    
    it("amazon website", function(){

       
        browser.url("https://www.amazon.in/");
        browser.maximizeWindow()

        landingPage.SearchingProcess()
        landingPage.searchResults()
        prod.SwitchingToWIindow()
        browser.pause(3000)

        specific.isImageDisplayed()
        browser.pause(2000)
       specific.Addquantity(2)
       specific.AddingToCart()

    });
    it.skip("Logging to the amazon", function(){

        loginpage.verifylogin(dataval.username, dataval.password)
    });
    
    
});
