//@Author: Shubham
class mobileHome{
    get closeButton(){
        return $('//span[@data-cy="close"]');
    }
    get flightsButton(){
        return $('//span[@class="spriteIcnWrap"]')    
    }
}
module.exports=new mobileHome()