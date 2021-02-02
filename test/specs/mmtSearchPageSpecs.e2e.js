const searchPageObjects = require('../pageobjects/mmtSearch.page')
const searchPageElements = require('../elements/mmtSearchPage.element')
const browserUtil = require('../../utilities/browser.util')
const tripData=require('../data/tripLogin.data')

it ('search flight for To and From City from Mobile browser',function(){
    
    it("Flight Search",function()
    {
        browser.url("https://makemytrip.com");
        searchPageObjects.searchPageElements("Mumbai","Delhi")
        browser.pause(2000)
        browser.saveScreenshot('./test/screenshot/mytrip.png')
        let fromlocn = $("#fromCity");
        let tolocn = $("#toCity");
        let departlocn = $("#departure");
        let retlocn = $ ("#return");
        let d1=tripData.fromDestination;
        let d2=fromloc.getText();
        let d3=tripData.toDestination;
        let d4=toloc.getText();
        if ((d1==d2) && (d3==d4))
        {
        console.log("From Location : "+fromlocn.getText()+" To Location : "+tolocn.getText());
        console.log("Departure :"+departlocn.getText()+" Return :"+retlocn.getText());
        }
    })
});