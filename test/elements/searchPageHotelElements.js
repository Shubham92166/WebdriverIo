//@Sailokeshwar
class searchPageHotelElements{
    get searchElements(){return $('div.hsw_inputBox.selectHtlCity');}
    get searchClickElement(){return $('input#city.hsw_inputField');}
    get searchClickDate(){return $('div.hsw_inputBox.dates');}
    get searchSelectStartDate(){return $("(//div[contains(text(),'3')])[1]");}
    get searchSelectEndDate(){return $("(//div[contains(text(),'6')])[1]");}
    get searchSelectForGuest(){return $('input#guest');}
    get searchSelectApply(){return $('//button[contains(text(),"APPLY")]');}
    get searchSearchElement(){return $('button#hsw_search_button');}
    get searchForSearchTab(){return $('div.react-autosuggest__container input.react-autosuggest__input');}
    get searchForVivant(){return $('li#react-autowhatever-1--item-0');}    
    get VivantaHotelElemen(){return $('//div[@class="makeFlex flexOne padding20 relative lftCol"]//p/span[@id="htl_id_seo_201111171125303709"]');}
    get hd_BreakfastCheckBox(){return $('//ul[@id="detpg_room_includes_options"]/li[text()="Breakfast Included"]');}
    get booknow(){return $("//div[@id='viewMoreRooms']/div[2]/div[@class='roomRight']/div[3]/div[3]//a[.='SELECT ROOM']");}
    get HotelCitySuggestionELement(){return $('ul.react-autosuggest__suggestions-list');}
    get sectionHeaderElement(){return $('ul.makeFlex.font12');}
}
module.exports=new searchPageHotelElements();