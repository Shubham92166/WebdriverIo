class mobileHome{
    get closeButton(){
    return $('//span[@data-cy="close"]');
    }
    get flightsButton(){
        return $('//span[@class="spriteIcnWrap"]')
        
    }
    get toCity(){
        return $('//div[@data-cy="toCity"]')
    }
    get toCityTexBox(){
        return $('//input[@data-cy="select-to-input"]')
    }
    get autoSuggestText(){
        return $('//li[@data-cy="suggestions-0"]');
    }
    get searchButton(){
        return $('//button[@data-cy="search"]');
    }
}
module.exports=new mobileHome();