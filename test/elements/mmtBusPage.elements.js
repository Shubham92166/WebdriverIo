//const { default: $ } = require("webdriverio/build/commands/browser/$");

class mmtPage{

    get busPage()
    {
        return $('//*[@class="makeFlex font12"]//*[text()="Buses"]');
    }
    get searchBtn()
    {
        return $('//*[@class="primaryBtn font24 latoBold widgetSearchBtn"]');
    }
    get seatLink()
    {
        return $('//*[@class="sc-jKJlTe bPClQZ"][1]');
    }
    get seatSelect()
    {
        return $('//*[@class="seat-icon"]');
    }
    get bookSeat()
    {
        return $('//span[contains (text(),"BOOK SEATS")]');
    }

}

module.exports = new mmtPage();




