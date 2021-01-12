class selectElements{

    get enteringSearchBox() { return $('#twotabsearchtextbox') }
    get clickOnSearch() { return $('#nav-search-submit-button') }
   // get select() { return $$("//div[@class='a-section.a-spacing-none.image-label.truncate-2line']/span") }
}

module.exports=new selectElements();