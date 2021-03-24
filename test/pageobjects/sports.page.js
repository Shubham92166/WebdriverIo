const Elem = require('../elements/bms.football.elements')
const Util = require('../../Utilities/bms.football.Util')
const Data = require('../data/bms.football.data')

class sportspage{

    windowChange(){
        Util.switchToWindowContaining(Data.sportsPageURL)
    }

    ClickCategory(){
        Util.Click(Elem.categories)
    }
    
    filterFootball(){
        Util.Click(Elem.football)
    }

    openPlayMania(){
        Util.Click(Elem.PlaySportsMania)
    }
    
}

module.exports = new sportspage