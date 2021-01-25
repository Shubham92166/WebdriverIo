//@Author:Shubham 
class travelSearchElements{
    get searchButton(){
        return $('//*[@id="root"]/div/div[2]/div/div/div[2]/p/a');
    }
    get sortingResult(){
        return $('//div[@class="sortby-dom-sctn price_sorter  active"]/span[@class="pointer"]');
    }
    get allFlightList(){
        return $$('//div[@class="fli-list-body-section"]');
    }
    price(i){
        return $('(//span[@class="actual-price"])['+i+']');
    }
}
module.exports=new travelSearchElements();
