const { expect } = require('chai')
const firstElementOfSearch=require('../elements/clickFirstElemOfSearch.element')

class FirstSearchElement
{
    contentOfFirstSearchElement()
        {
       const b=firstElementOfSearch.textOfTitle.getText()
        console.log(b)
        return b
        }

    firstSearchElement()
    {
        firstElementOfSearch.firstElementPage.click()
        browser.pause(10000)
       //expect(firstElementOfSearch.textOfTitle).to.have.//.toHaveText('Dell Vostro 3401 14inch FHD AG 2 Side Narrow Border Display Laptop (10th gen i3-1005G1 / 4GB / 1TB / Integrated Graphics/ Win 10 + MS Office H&S 2019 / Black) D552124WIN9BE')
       const currentWindowHandle =browser.getWindowHandle()
       const allWindowhandle =browser.getWindowHandles()
       for(let handle of allWindowhandle)
       {
           if(handle!= currentWindowHandle)
           {
               browser.switchToWindow(handle)
               break
           }
           
       }
    }
        

    


}

module.exports=new FirstSearchElement()