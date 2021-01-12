//nst { select } = require('../Elements/elements')
const selectElements= require('../Elements/elements')
const dataval=require('../Data/data');

class landingPage{
   
    SearchingProcess()
{
    selectElements.enteringSearchBox.setValue('Apple Mac Book')
    selectElements.clickOnSearch.click()
    
}     

        searchResults() 
        {
            const list= $$("//span[@class='a-size-medium a-color-base a-text-normal']")
            console.log("length is", list.length)
            browser.pause(3000)

            for(let element of list)
            {
             if((element.$("//span[@class='a-size-medium a-color-base a-text-normal']").getText())==='Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver')
                {
                element.$("//span[@class='a-size-medium a-color-base a-text-normal']").click();
                break;
                }
            }
        }


    }


    
        
    
    

            
module.exports= new landingPage();
