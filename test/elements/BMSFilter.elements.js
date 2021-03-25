//Shreyas
class BMSFilterpage{

    get Date() { return $("(//div[text() = 'This Weekend'])[2]");}
    get language() { return $("//*[text() = 'Language']");}
    get English() { return $("(//*[text() = 'English'])[2]");}
    get Genres() { return $("(//*[text() = 'Genres'])");}
    get comedy() {return $("(//*[text() = 'Comedy'])[2]");}
    get play() {return $("(//*[text() = 'Investigation - SBC'])[1]");}
    get Book() {return $("//button[text() ='Book']");}
  
  }
  
  module.exports = new BMSFilterpage();