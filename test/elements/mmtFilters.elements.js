class mobileFilters{
    get filterBars(){
        return $('//p[@class="sorterBar"]');
    }
    get filtersTab()
    {
        return $('//p[@class="make_flex space_between"]/span[2]');
    }
    get Airline(){
        return $('//label[@for="opAl-1"]/span[1]/span[2]');
    }
    get applyButton(){
        return $('//div[@class="filterSctn applyFilter"]/a');
    }
    get allFlights(){
        return $$('//div[@class="dept-options"]');
    }
    airlinesName(i){
        return $('(//b/font[1][contains(text(),"AirAsia")])['+i+']');
    }
}
module.exports=new mobileFilters();
