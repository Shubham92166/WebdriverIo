class tripLoginElements{



    get fromBox () {return $('.fsw_inputBox.searchCity.inactiveWidget')}
    get toBox () {return $('//label[@for="toCity"]')}
    get from () {return $('//input[@placeholder="From"]')}
    get to () {return $('//input[@placeholder="To"]')}
    get fromLocation () {return $('//p[text()="Kempegowda International Airport"]')}

    get toLocation () {return $('//p[text()="Rajiv Gandhi Intl Airport"]')}
    get departure () {return $('//label[@for="departure"]')}
    get departureDate () {return $('//div[@class="DayPicker-Month"][1]//p[text()="28"]')}
    get searchButton () {return $('//a[text()="Search"]')}
    // get flightDetailsButton () {return $('/html//div[@id="premEcon"]/div/div[1]/div[@class="card-upperpart-wrapper"]//span[.="Flight Details"]')}

    get flightDetailsButton() {return $('(/html//div[@id="premEcon"]/div/div[1]/div[1]//span[.="Flight Details"])')}

    get cancellationButton() {return $('(//div[@id="flightDetailsTab-0"][1]/..//a[text()="CANCELLATION"][1])')}
    get viewPrices () {return $('/html//div[@id="premEcon"]/div/div[1]/div[1]//div[@class="fli-list-body-section"]//button[.="View Prices"]')}
    get lowFareBooknowButton () {return $('(//div[contains(@id,"fli_list_item")][1]//button[text()="Book Now"][1])[1]')}
    get reviewYourBooking () {return $('/html//div[@id="premEcon"]/div/div[1]/div[3]/div[1]/div[@class="make_flex spaceBetween"]/div[@class="faresRightSection"]/div[@class="make_relative"]/button[.=" Book Now "]')}


    get loginBtn() { return $('//li[@class="makeFlex hrtlCenter font10 makeRelative lhUser"]') }
    get EmailID() { return $('//input[@id="username"]')}
    get continue() { return $('//button[@class="capText font16"]')}
    get password() {return $('//input[@id="password"]')} 
    get login() { return $('//button[@class="capText font16"]')}
    get error() { return $('//p[@class="validity font12 redText appendTop5 makeFlex"]')}


    get frominputbox(){return $ ('.fsw_inputBox.searchToCity.inactiveWidget')}
    get fromcity() {return $ ('//input[@placeholder="From"]')}
    get tocity() {return $('//input[@placeholder="To"]')}
    get fromPlace() {return $('//p[text()="Chhatrapati Shivaji International Airport"]')}
    get fromcityinput() {return $('//p[@class="font14.appendBottom5.blackText][1]')}
    get toPlace() {return $('//p[text()="Delhi Airport"]')}
    get tocityinput() {return $('//div[@class="makeFlex.hrtlCenter"][3]')}
    get setdate() {return $ ('//p[text()="28"]')}
    get search() {return $ ('//a[text()="Search"]')}
    
    

}
module.exports=new tripLoginElements();