const Elem = require('../elements/bms.football.elements')
const Util = require('../../Utilities/bms.football.Util')

class homePage{

    sectionHome(){
        browser.url('/')
        browser.maximizeWindow();
        //browser.pause(5000)
    }

    closeUpdates(){
        Util.Click(Elem.closeUpdates)
    }

    selectBangalore(){
        Util.Click(Elem.Bangalore)
    }

    openSports(){
        Util.Click(Elem.Sports)
    }

    
}


module.exports = new homePage