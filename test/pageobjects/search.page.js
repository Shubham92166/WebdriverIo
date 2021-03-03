const searchElement =require("../elements/search.element")

class SearchPage {
    searchpage()
    {
    var a =  searchElement.firstSearchResult.getText()
    console.log(a)
    return a
    }
    

}

module.exports =new SearchPage()