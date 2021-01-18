class tripLoginElements{

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