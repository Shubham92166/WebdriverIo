//Anmol
const ptm = require("../pageobjects/paytm.page");

describe("paytm movies",function() {
    
    it("open",function() {
        browser.url("https://www.paytm.com");

        browser.pause(2000);

        ptm.sel_movies();

        browser.pause(2000);
        ptm.selectCity();
        
        ptm.bookMovieTickets();

        ptm.sel_time();
        
    })

});
