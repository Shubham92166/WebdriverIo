//@Sailokeshwar
class searchPageFlightsElements{

    get sectionHeaderElement(){return $('ul.makeFlex.font12');}
    get sectionFlightTripMode(){return $('ul.fswTabs.latoBlack.greyText');}
    get flightFrom(){return $('#fromCity');}
    get setValueInFrom(){return $(".react-autosuggest__input.react-autosuggest__input--open");}
    get flightFromLucknow(){return $('.react-autosuggest__section-container.react-autosuggest__section-container--first .calc60');}
    get setValueInTo(){return $(".react-autosuggest__input.react-autosuggest__input--open");}
    get flightFromDelhi(){return $('.react-autosuggest__section-container.react-autosuggest__section-container--first .calc60');}
    get firstDate(){return $('(//p[text()="9"])[1]');}
    get secondDate(){return $('(//p[text()="12"])[1]');}
    get apply(){return $('//button[text()="APPLY"]');}
    get searchButton(){return $("//a[contains(text(),'Search')]");}
    get departure1(){return $('(//span[text()="Departure"])[1]');}
    get departure2(){return $('(//span[text()="Departure"])[2]');}
    get filterIndigo(){return $('(//span[text()="IndiGo"])[1]');}
    get sliderHandler1(){return $('div.rc-slider-handle');}
    get selectFlight1(){return $("//div[@id='root']/div//div[@class='flightBody']/div[@class='flightsContainer makeFlex spaceBetween']/div[@class='listingRhs']/div//div[@class='splitVw']/div[1]/div[@class='listingCardWrap']/div/label[1]/div[@class='listingCard']/div[2]/div[@class='makeFlex']/span[@class='customRadioBtn']/span[@class='outer']");}
    get selectFlight2(){return $("//div[@id='root']/div//div[@class='flightBody']/div[@class='flightsContainer makeFlex spaceBetween']/div[@class='listingRhs']/div//div[@class='splitVw']/div[2]/div[@class='listingCardWrap']/div/label[1]/div[@class='listingCard']/div[2]/div[@class='makeFlex']/span[@class='customRadioBtn']/span[@class='outer']");}
    get bookNow(){return $('//button[text()="Book Now"]');}
    get continue(){return $('button.buttonPrimary.buttonBig.lato-black.button');}
    get clickNo(){return $("//div[@id='insurance-section']//span[@class='labeltext']");}
    get reviewContinue(){return $('//button[text()="Continue"]');}
    get firstName(){return $('//div[@class="tvlrDtls-section"][1]/div[@class="trvl-formfield-row"]/div[1]//input');}
    get lastName(){return $('//div[@class="tvlrDtls-section"][1]/div[@class="trvl-formfield-row"]/div[2]//input');}
    get gender(){return $("//div[@id='wrapper_ADULT']/div[@class='paddLR15']/div//div[@class='tvlrDtls-section']/div[@class='trvl-formfield-row']/div[3]/div/div/label[1]")}
    get mobilenumber(){return $('//input[@placeholder="Mobile No"]');}
    get emailId(){return $('//input[@placeholder="Email"]');}
    get airportPick(){return $('(//div[@class="rvw-sctn append_bottom15 airportCabSection"]/div[2]/div[@class="pickDropCard checkbox-group append_bottom10 "])[1]');}
    get covidInsurenceAdd(){return $("//div[@id='root']//div[@class='fix_header_mar_top']//form/div[7]/div[2]/div[@class='covidInsuDtlRight']/span/span[.='+ ADD']");}
    get TravellerPageContinue(){return $('//button[text()="Continue"]');}
    get reviewDetails(){return $('//h3');}
    get confirm(){return $('a.fli_primary_btn.btn.marR10');}
}
module.exports=new searchPageFlightsElements();