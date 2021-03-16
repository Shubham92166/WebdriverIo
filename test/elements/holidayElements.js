//Nithin
class holidayElements{

    get holidayPage(){
        return $("//li[@data-cy='menu_Holidays']")
    }

    get fromLocation(){
        return $("//*[@id='fromCity']")
    }

    get fromCity(){
        return $("//*[text()='Bangalore']")
    }

    get toLocation(){
        return $("//*[@id='toCity']")        
    }

    get toCity(){
        return $("//*[text()='Goa']")
    }

    get searchBtn(){
        return $("//*[@id='search_button']")
    }
    
    get fiveStar(){
        return $("//button[text()='5']")
    }

    get fiveStar2(){
        return $("//li[text()='5']")
    }

    get moreFilters(){
        return $("//a//p")
    }


    get flights(){
        return $("//button[text()='With Flights']")
    }

    get flights2(){
        return $("//li[text()='With Flights']")
    }

    get listOfResults(){
        return $$("(//div[@class='appendBottom15'])[1]")
    }

    get listofResults2(){
        return $$("(//div[@class='gridCard'])[1]")
    }

    get elem(){
        return $("//h1")
    }

    get elem2(){
        return  $("//p[text()='Experience beaches and sunset']")
    }    

}

module.exports = new holidayElements;