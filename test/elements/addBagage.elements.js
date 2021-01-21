class addbagageelements{

get viewprice() {  return $("(//button[contains(@id,'bookbutton')])[1]")}

get booknow() { return $("(//button[contains(@class, 'btn fli_primary_btn text-uppercase')])[1]")}

get addbagage () {return $ ("//*[@id='journey_card_DELBLR2021-01-22']/div[3]/div[3]/div/div/button")}

get checkinExtraBag () { return $("//button[contains(text(),'+ ADD')]")}

get done () {return $("//a[contains(text(),'DONE')]")}

get addExtrabagageText () {return $("//font[contains(text(),'Add Extra check-in baggage')]")}



}

module.exports=new addbagageelements();