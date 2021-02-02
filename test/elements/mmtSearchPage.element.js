class searchPageElements{

 get frominputbox(){return $ ('.fsw_inputBox.searchCity.inactiveWidget')}
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
