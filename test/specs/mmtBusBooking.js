//const mmtBusBook = require("../elements/mmtBusPage.elements")
    const busTicket = require("../pageobjects/busTickets.searchPage");
    describe("make my trip interaction", function () {

            it("Bus page elements", function () {

                    busTicket.mmtHomePage();

                    busTicket.busIconClick();

                    busTicket.busSearch();

                    busTicket.bookTicket();

                    busTicket.selectSeat();

                    busTicket.bookSeat();


                });


        });
