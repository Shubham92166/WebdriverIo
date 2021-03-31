//const { default: $ } = require("webdriverio/build/commands/browser/$");
//Himadree
class bookMyShowElements{

    get closePopup()
    {
        return $('//button[text()="Not Now"]')
    }
    get selectCity()
    {
        return $('//span[contains (text(),"Bengaluru")]')
    }
    get activityLink()
    {
        return $('//*[@class="sc-iGrrsa FYYCw"][text()="Activities"]');
    }
    get filterOne()
    {
        return $('//*[@class="style__StyledText-sc-7o7nez-0 boewjJ"][text()="Tomorrow"]');
    }
    get moreFilters()
    {
        return $('//*[text()="More Filters"]');
    }

    get filterTwo()
    {
        return $('//*[@class="style__StyledText-sc-7o7nez-0 boewjJ"][text()="Outdoor Events"]');
    }

    get selectShow()
    {
        return $('//div[contains(text(),"Planetarium Show Jawaharlal Nehru Bengaluru")]')
    }

    get bookShow()
    {
        return $('//*[text()="Book"]')
    }

}

module.exports = new bookMyShowElements();

