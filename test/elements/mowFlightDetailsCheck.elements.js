class MowFlightDetailsCheckElements{

    
    get closeButton(){return $('//span[@data-cy="close"]')}
    get flights() {return $('(//span[@class="spriteIcnWrap"])[1]')}
    get from() {return $('(//span[text()="FROM"])[1]')}
    get fromSearch() {return $('#autoSuggestWidget')}
    get fromLocation() {return $('//span[text()="Kempegowda International Airport"]')}
    get toSearch() {return $('#autoSuggestWidget')}
    get toLocation() {return $('//span[text()="Rajiv Gandhi Intl Airport"]')}
    get departureDate() {return $('//span[text()="DEPARTURE DATE"]')}
    get selectDate() {return $('(//div[text()="22"])[1]')}
    get doneButton() {return $('(//a[text()="DONE"])')}
    get searchFlights() {return $('(//button[text()="Search Flights"])')}
    get indigoFlight() {return $('(//font[text()="IndiGo"])[1]')}
    //get airAsiaFlight() {return $('')}
    get saver() {return $('//p[text()="Saver"]')}
    get saverSelection() {return $('(//span[@class="inner"])[1]')}
    get servicesPageContinue() {return $('//span[text()="Continue"]')}
    get viewFlightDetails() {return $('//p[text()="VIEW FLIGHT DETAILS"]')}
}

module.exports=new MowFlightDetailsCheckElements()