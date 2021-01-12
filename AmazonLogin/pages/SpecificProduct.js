
const util=require('../Utilities/browser.util')
const element=require('../Utilities/Element.util')
const productone=require('../Elements/ProductElements')


class product{

    SwitchingToWIindow()
    {
        
         util.switchToTab('Buy Apple Mac Book Air')
       
    }

    isImageDisplayed(){

      if( productone.Image.isDisplayed())
      {
         console.log("The image is dispalayed")
      }
    }


    Addquantity(index)
    {
         productone.quantity.selectByVisibleText(index)
    }
    AddingToCart(){

         productone.addToCart.click()
    }
    
}
module.exports=new product()