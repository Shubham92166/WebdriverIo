class MowFlightDetailsCheckElements{

    
    get fromLocation() {return $('//span[text()="Kempegowda International Airport"]')}
    get toLocation() {return $('//span[text()="Rajiv Gandhi Intl Airport"]')}
    get selectDate() {return $('(//div[text()="22"])[1]')}
    get indigoFlight() {return $('(//font[text()="IndiGo"])[1]')}
    get saver() {return $('//p[text()="Saver"]')}
    get saverSelection() {return $('(//span[@class="inner"])[1]')}
    get servicesPageContinue() {return $('//span[text()="Continue"]')}
    get viewFlightDetails() {return $('//p[text()="VIEW FLIGHT DETAILS"]')}
}

module.exports=new MowFlightDetailsCheckElements()