class HomeElement{

    get inputUsername () { return $('#username') }
    get searchbutton (){return $('#nav-search-submit-button')}
    get searchbox (){return $("//input[@id='twotabsearchtextbox']")}


}

module.exports=new HomeElement()