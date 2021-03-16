class makemytripHolidaysPage{
    get holiday_icon(){
        return $('//*[@id="SW"]/div[1]/div[2]/div/div/nav/ul/li[4]/a/span[1]')
    }
    get fromcity_icon(){
        return $('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[1]/div[1]/label')
    }

    get fromcityname(){
        return $('#react-autowhatever-1-section-0-item-0 > div > p > span')
    }

    get tocityname(){
        return $('#react-autowhatever-1-section-0-item-3 > div > p > span')
    }

    get search_button(){
        return $('//*[@id="search_button"]')
    }
}

module.exports = new makemytripHolidaysPage(); 