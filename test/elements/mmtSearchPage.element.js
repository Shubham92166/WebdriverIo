//@Author: Shubham
class mobileSearch{
    get fromCity(){
        return $('//div[@data-cy="fromCity"]');
    }
    get fromCityTextBox(){
        return $('//input[@data-cy="select-from-input"]');
    }
    get autoSuggestTextForFrom(){
        return $('//li[@data-cy="suggestions-0"]');
    }
    get toCity(){
        return $('//div[@data-cy="toCity"]');
    }
    get toCityTexBox(){
        return $('//input[@data-cy="select-to-input"]')
    }
    get autoSuggestTextForTo(){
        return $('//li[@data-cy="suggestions-0"]');
    }
    get searchButton(){
        return $('//button[@data-cy="search"]');
    }
    get departureDateSelector(){
        return $('//div[@data-cy="departure"]');
    }
    get departureDate(){
        return $('//div[contains(@aria-label,"Feb 07 2021")]');
    }
    get calendarDoneButton(){
        return $('//a[@data-cy="calendarDone"]');
    }
    get travellerClass(){
        return $('//div[@data-cy="traveller"]');
    }
    get adultIncrement(){
        return $('//span[@data-cy="Adults-increment"]');
    }
    get travelSubmit(){
        return $('//button[@data-cy="travelSubmit"]');
    }
    get allFlights(){
        return $('//div[@class="fli-list-body-section dom-one-way "]');
    }
    get arrivalCity(){
        return $('(//p[text()="Bengaluru"])[1]');
    }
    get departureCity(){
        return $('(//p[text()="Kolkata"])[1]');
    }
}
module.exports=new mobileSearch();