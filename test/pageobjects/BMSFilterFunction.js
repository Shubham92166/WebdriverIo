//shreyas
const FilterElements = require("../elements/BMSFilter.elements");
const BMSdata = require("../data/BMSdata");
const { expect } = require("chai");

class BMSFilterFunction{
   SelectDate(){
      const elem1 =  FilterElements.Date;
      expect(elem1).to.exist;
        elem1.click();
      browser.pause(4000);
   }

   SelectLanguage(){
      const elem2 =  FilterElements.language;
     elem2.waitForDisplayed({ timeout: 5000 });
        elem2.click();
       const elem3 = FilterElements.English;
    elem3.waitForDisplayed({ timeout: 5000 });
    if(elem3.getText().includes(BMSdata.Language))
        elem3.click();
    else
        return false;
       browser.pause(3000);
   }

   SelectGenre(){
      const elem4 =  FilterElements.Genres;
    elem4.waitForDisplayed({ timeout: 5000 });
        elem4.click();
        browser.pause(5000);
      const elem5 =  FilterElements.comedy;
    elem5.waitForDisplayed({ timeout: 5000 });
    if(elem5.getText().includes(BMSdata.Genre))
    {
        elem5.click();
        browser.pause(5000);
    }
    else
        return false;
   }

   SelectPlay(){
       const elem6 = FilterElements.play;
     elem6.waitForDisplayed({ timeout: 5000 });
     if(elem6.getText().includes(BMSdata.Play))
     {
      elem6.click();
      browser.pause(3000);
     }
     else
      return false;
      const elem7 =  FilterElements.Book;
     elem7.waitForDisplayed({ timeout: 3000 });
        elem7.click();
       browser.pause(3000);
   }

}

module.exports = new BMSFilterFunction();