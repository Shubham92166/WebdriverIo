class travelFilterElements{
    get fiterFlight(){
        return  $("(//p[contains(text(), 'Go Air')]/ancestor::label[contains(@for, 'newGroupFilter')]/span/span[@class='check'])[2]");   
    }
    
}
module.exports=new travelFilterElements();