const amazonWhislistPage = require('../pageobjects/amazonWhislist.page')
const amazonWhislistElements = require('../elements/amazonWhislist.element')

describe('Amazon',function(){

    it('add the item to whislist without login and verify is asking for login or not',function(){
        browser.url('https://www.amazon.in/')
        amazonWhislistPage.addToWhislist(amazonWhislistElements.searchText)
        assert.isTrue(amazonWhislistPage.validateWhislistButton(),'not asking for login')

    })
})