class tripLoginElements{

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