class travellers{
    get FirstName() { return $('//div[@class="tvlrDtls-section"][1]/div[@class="trvl-formfield-row"]/div[1]//input') } ; // get it from travellers detail Data
    
    get Lastname() { return $('//div[@class="tvlrDtls-section"][1]/div[@class="trvl-formfield-row"]/div[2]//input') } ;// get it from travellers detail Data
    get gender() { return $('//div[@class="tvlrDtls-section"]/div[@class="trvl-formfield-row"]/div[3]/div/div/label[1]')}
    get mobileno() { return $('//div[@class="tvlrFormField make_relative MOBILE_NUMBER"]//input[@class="tvlrInput "]')}  // get it from travellers detail Data
    get email() { return $('//div[@class="tvlrFormField make_relative EMAIL"]//input[@class="tvlrInput "]')} // get it from travellers detail Data
    get submitTraveller() { return $('//button[@class="ack-cta btn fli_primary_btn text-uppercase"]')}
    get headerReview() { return $('//div[@id="root"]//h3[.="Review Details"]')}
    get flightlogo() { return $('//span[@class="chNavIcon appendBottom2 chSprite chFlights active"]') }    
    get submitSearch() { return $('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]')}

    get viewPr() { return $('//div[@id="premEcon"]/div/div[1]/div[1]//div[@class="fli-list-body-section"]//button[.="View Prices"]')}
    get bookNow() { return $('//div[@id="premEcon"]/div/div[1]/div[3]/div[1]/div[@class="make_flex spaceBetween"]/div[@class="faresRightSection"]/div[@class="make_relative"]/button[.=" Book Now "]')}

    get Rev_tripProtection() {return $('//div[@class="make_relative"]//label[@class="block radio append_bottom15"]//input[@value="yes"]')}
    get reviewtripProtection(){ return $('//div[@id="digit-insurance-section"]//*[text()="No, I do not wish to secure my trip"]')}
    get submitReview()  { return $('//div[@class="append_bottom15 make_relative blocked_traveller_booking"]//button[@id="review-continue"]')}
    ///html//div[@id='premEcon']/div/div[1]/div[3]/div[1]/div[@class='make_flex spaceBetween']/div[@class='faresRightSection']/div[@class='make_relative']/button[.=' Book Now ']

    
}
module.exports = new travellers();