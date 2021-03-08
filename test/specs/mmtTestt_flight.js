//@Sailokeshwar
const mainPageSectionHeader=require("../pageobjects/main.SectionHeader.FlightPage");
const mmtflightPage=require("../pageobjects/mmtFlightPage");
const mmtFlightSearchPage=require("../pageobjects/searchedFlight");
const mmtflightReviewPage=require("../pageobjects/flight.reviewPage");
const mmtflightTravellerPage=require("../pageobjects/flight.travellerPage");
describe('MakeMyTrip', function(){
    it('Flights Review Popup',function(){
        //header section
    mainPageSectionHeader.sectionHeader();
    mainPageSectionHeader.clickFlight();
    //flight Page
     mmtflightPage.tripMode();
     mmtflightPage.from();
     mmtflightPage.to();
     mmtflightPage.date();
     mmtflightPage.search();
     //flight Search
     mmtFlightSearchPage.clickIndigoFilter1();
     mmtFlightSearchPage.sliderHandleFilter2();
     mmtFlightSearchPage.departureFilter3();
     mmtFlightSearchPage.selectFlightFilter4();
     mmtFlightSearchPage.bookNow();
     mmtFlightSearchPage.continue();
     //review Page
     mmtflightReviewPage.clickNO();
     mmtflightReviewPage.reviewContinue();
     //flight Traveller
     mmtflightTravellerPage.adult();
     mmtflightTravellerPage.contactInformation();
     mmtflightTravellerPage.pickUp();
     mmtflightTravellerPage.reviewPageContinue();
     mmtflightTravellerPage.isReview();
     mmtflightTravellerPage.confirm();

    });
    
});
