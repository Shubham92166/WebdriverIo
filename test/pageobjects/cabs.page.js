//Anmol
const elementUtil = require("../../Utilities/cabsElements.util");
const config = require("../data/cab.data");
class Page{
    
    get searchBar() { return $('a.primaryBtn.font24.latoBold.widgetSearchBtn')}
    get viewPrices() { return $('div.cabPage div.container.makeFlex div.width970 div.makeFlex.column div.cabListingTileWrapper.blackText:nth-child(1) div.makeFlex div.cabBookDetails.makeFlex.column.textRight div.makeFlex.column.spaceBetween.priceDetailsPadding.flexGrow1 a.appendBottom10.appendTop10.makeFlex.column.alignEnd:nth-child(4) > span.viewPricesButton.makeFlex.hrtlCenter.widthFitContent')}
    get bookButton() { return $('div.cabPage div.container.makeFlex div.width970 div.makeFlex.column div.cabListingTileWrapper.blackText:nth-child(1) div.cabListTileExtension div.width446.packageCard:nth-child(1) div.appendTop20.makeFlex.spaceBetween.flexGrow1 div.makeFlex.column.spaceBetween.flexGrow1.alignFlexEnd.maxWidth40percent a.appendTop15:nth-child(4) > span.bookButton')}

    get pickupAddr() { return $('input[placeholder="Enter exact pick-up address/nearby location / building name"]')}
    
    get dropoffAddr() { return $('input[placeholder="Enter drop address to know the exact fare & avoid extra charges after the trip"]')}

    get name() { return $('input[placeholder="Enter your full name"]')}
    get emailId() { return $('input[placeholder="Enter Email ID"]')}

    get radioCheck() { return $('div.cabPage div.cabPage div.container div.makeFlex.appendTop20 div.cabReviewLeftWrapper div.appendBottom20:nth-child(7) div.cabTipDetails div.confirmTraveler.blackText div.makeFlex.spaceBetween:nth-child(1) div.width45percent.makeFlex.column div.makeFlex.flexGrow1.hrtlCenter span.makeFlex:nth-child(1) > div.radioUnchecked')}
    get mobileNo() { return $('input[placeholder="Enter 10 digit mobile number"]')}

    get popUp() { return $('div.loginModal.displayBlock.modalLogin.dynHeight.personal')}


    searchCabs(){
        return elementUtil.customClick(this.searchBar)
    }

    viewPricesAndBookCab(){
        return elementUtil.viewAndBook(this.viewPrices,this.bookButton)
    }
    
    
    checkRadioButton(){
        return elementUtil.customClick(this.radioCheck)
    }


    enterAddress(){
        return elementUtil.doSetValue(this.pickupAddr,'Malabar')
    }

    enterName(){
        
        return elementUtil.doSetValue(this.name,config.firstName)

    }
    enterEmail(){
        
        return elementUtil.doSetValue(this.name,config.email)

    }
    enterMob(){
        
        return elementUtil.doSetValue(this.name,config.mobileNumber)

    }

}

module.exports = new Page();