const moblieLoginElements=require('../elements/mmtLoginPage.elements')
const elementUtil=require('../../Utilities/elements.util')

class MobileSearchPage{

    mobileLogin(){
        elementUtil.clickElement(moblieLoginElements.closeButton)
    }
}

module.exports=new MobileSearchPage()