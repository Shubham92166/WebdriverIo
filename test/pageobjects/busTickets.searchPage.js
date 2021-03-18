const { expect } = require("chai");
const mmtBusBook = require("../elements/mmtBusPage.elements")

class busTicket {

    mmtHomePage() 
    {
        browser.url('/');
        expect(browser.getTitle()).to.have.contain("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");
    }

    busIconClick()
    {
        mmtBusBook.busPage.waitForDisplayed({ timeout: 20000 })
        mmtBusBook.busPage.click();
        expect(browser.getUrl()).to.contain("bus-tickets");
    }

    busSearch()
    {
        mmtBusBook.searchBtn.click();
        browser.pause(3000);
        expect(browser.getUrl()).to.contain("bus/search");
    }

    bookTicket()
    {
        mmtBusBook.seatLink.click();
        browser.pause(3000);
        expect(browser.getUrl()).to.contain("bus/search");
    }

    selectSeat()
    {
        mmtBusBook.seatSelect.click();
        browser.pause(3000);
        expect(browser.getUrl()).to.contain("bus/search");
    }
    bookSeat()
    {
        mmtBusBook.bookSeat.click();
        browser.pause(5000);
        expect(browser.getUrl()).to.contain("bus/traveller");

    }
}

module.exports = new busTicket();
