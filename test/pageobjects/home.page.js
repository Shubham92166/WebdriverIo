const { expect } = require('chai')
// const expect= require('expect-webdriverio')

const HomepageElement= require('../elements/homepage.element')
class HomePage {

    search(value)
    {
        HomepageElement.searchbox.setValue(value)
        expect(HomepageElement.searchbox.getAttribute('value')).to.equal(value)
        //expect(HomepageElement.searchbox)
        HomepageElement.searchbutton.click()
        
        browser.pause(2000);
    }
}

module.exports = new HomePage()