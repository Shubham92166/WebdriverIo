class bmselements{

    get closeUpdates(){
        return $("//button[text()='Not Now']")
    }

    get Bangalore(){
        return $("(//div[@class='sc-drlKqa iexglP'])[3]")
    }

    get Sports(){
        return $("//a[text()='Sports']")
    }

    get categories(){
        return $("//div[text()='Categories']")
    }

    get football(){
        return $("(//div[text()='Football'])[2]")
    }

    get PlaySportsMania(){
        return $("//img[@alt='Play Mania Sports Lounge']")
    }

    get BookingButton(){
        return $("//button[text()='Book']")
    }

    get Location(){
        return $("//div[text()='Play Mania: Bengaluru']")
    }

    get Price(){
        return $("//div[@class = 'df-by df-ci df-h']")
    }




}



module.exports = new bmselements