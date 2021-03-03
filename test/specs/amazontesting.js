const Homepage =require('../pageobjects/home.page')
const Searchpage=require('../pageobjects/search.page')
const searchdata =require('../data/search.data')
const firstSearch= require('../pageobjects/firstSearchElement.page');
const firstserachElement =require('../elements/clickFirstElemOfSearch.element');
//const { expect } = require('chai');
//const { expect } = require('chai');
describe ("Amazon", ()=>{
    it("search",()=>{
        browser.url('https://www.amazon.in/');
        browser.maximizeWindow();
        browser.pause(2000);
        Homepage.search(searchdata.searchValue)
        Searchpage.searchpage()
        });

    it("get details of first search result" ,()=>{
        expect(firstserachElement.firstElementPage).toBeExisting()
        let firstSearchText = Searchpage.searchpage()
        firstSearch.firstSearchElement();
      // firstSearch.contentOfFirstSearchElement();
      browser.pause(2000)
        expect(firstserachElement.textOfTitle).toHaveText(firstSearchText)

       
        //expect(elem).toBeExisting()


    })
    
});

