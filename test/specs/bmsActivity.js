//Himadree
const bmsShowActivity = require("../pageobjects/bmsActivity.page");
describe("Book My Show Activity Booking", function () {

        it("Bms Activity", function () {

               bmsShowActivity.bmsHomePage();

               bmsShowActivity.bmsCityClick();

               bmsShowActivity.clickActivity();

               bmsShowActivity.filterTomm();

               bmsShowActivity.moreFilter();

               bmsShowActivity.outdoorFilter();

               bmsShowActivity.selectShow();

               bmsShowActivity.bookShow();


            });


    });
