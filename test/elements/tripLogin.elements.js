class tripLoginElements{


    get fromBox () {return $('.fsw_inputBox.searchCity.inactiveWidget')}
    get toBox () {return $('//label[@for="toCity"]')}
    get from () {return $('//input[@placeholder="From"]')}
    get to () {return $('//input[@placeholder="To"]')}
    get fromLocation () {return $('//p[text()="Kempegowda International Airport"]')}
    get toLocation () {return $('//p[text()="Rajiv Gandhi Intl Airport"]')}
    get departure () {return $('//label[@for="departure"]')}
    get departureDate () {return $('//div[@class="DayPicker-Month"][1]//p[text()="22"]')}
    get searchButton () {return $('//a[text()="Search"]')}
    get flightDetailsButton () {return $('(//div[contains(@id,"fli_list_item_")][1]/..//span[text()="Flight Details"])[1]')}
    get cancellationButton() {return $('(//div[@id="flightDetailsTab-0"][1]/..//a[text()="CANCELLATION"][1])')}
    get viewPrices () {return $('(//div[contains(@id,"fli_list_item_")][1]/..//button[contains(@id,"bookbutton-RKEY:")])[1]')}
    get lowFareBooknowButton () {return $('(//div[contains(@id,"fli_list_item")][1]//button[text()="Book Now"][1])[1]')}
    get reviewYourBooking () {return $('//div//h4[text()="Review your booking"]')}

    get loginBtn() { return $('//li[@class="makeFlex hrtlCenter font10 makeRelative lhUser"]') }
    get EmailID() { return $('//input[@id="username"]')}
    get continue() { return $('//button[@class="capText font16"]')}
    get password() {return $('//input[@id="password"]')} 
    get login() { return $('//button[@class="capText font16"]')}
    get error() { return $('//p[@class="validity font12 redText appendTop5 makeFlex"]')}
    

    fromDestination = 'Mumbai'
    toDestination = 'Delhi'
    departureDate = '30'

    get fromcity() {return $ ('#fromCity')}
    get tocity() {return $('//input[@placeholder="To"]')}
    get fromLocation() {return $('//p[text()="Chhatrapati Shivaji International Airport"]')}
    get toLocation() {return $('//p[text()="Delhi Airport"]')}
    get setdate() {return $ ('//p[text()="30"]')}
    get searchButton() {return $ ('//a[text()="Search"]')}
}
module.exports=new tripLoginElements();