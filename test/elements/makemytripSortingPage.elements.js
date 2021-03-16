class makemytripSortingPage{
    get hotelCategory(){
        
       return $("//*[@class='makeFlex packageFilterHotelChoice']/li[2]")
      //  return $('//*[@id="filterPanel"]/div[1]/div[2]/div/button[1]')
      //return $('//*[@type="button" and @class="multiSelect filterBtn "]')
                
    }  
         
         
    get place(){
        return $('//*[text()="Exquisite Kerala Flight Inclusive Deal"]')
       // return $('//*[@id="root"]/div/div[2]/div/div[3]/div[2]/div[3]/div/div[2]/div[1]/h3')
        

    }
        
    }



module.exports = new makemytripSortingPage();