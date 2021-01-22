//@Author:Shubham 
class travelFilterElements{
    get fiterFlight(){
        return  $("(//p[contains(text(), 'Go Air')]/ancestor::label[contains(@for, 'newGroupFilter')]/span/span[@class='check'])[2]");   
    }
    get displayFilter(){
        return $('//div[@id="root"]/div/div[2]/div[3]/div[1]/div[1]/div[1]');
    }
    get displayFilterName(){
        return $('//div[@id="root"]/div/div[2]/div[3]/div[1]/div[1]/div[1]/ul/li');
        //return $('//li/text()')
   
    }
}
module.exports=new travelFilterElements();