//Anmol
const elementUtil = require("../../util/cabsElement.util");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

class paytmPage{

    get movies_bttn(){ return $('img[alt="Movies"]')}
    get sel_city(){ return $('//*[contains(@href,"/movies/lucknow")]')}
    get book_tickets(){ return $('(//*[contains(text(),"Book Tickets")])[1]')}
    get date(){ return $('#app > div:nth-child(2) > div._3JJDh > div > div > div._19ZuB > div > div > div > div.slick-list > div > div:nth-child(3) > div > div > a')}
    get timings(){ return $('(//div[@class="liA0y _1gV1c"])[4]')}

    sel_movies(){
        return elementUtil.customClick(this.movies_bttn)
    }

    selectCity(){
        return elementUtil.customClick_2(this.sel_city)
        
    }

    bookMovieTickets(){
        return elementUtil.customClick(this.book_tickets)
    }

    sel_time(){
        return elementUtil.customClick(this.timings)
    }

}
module.exports = new paytmPage();