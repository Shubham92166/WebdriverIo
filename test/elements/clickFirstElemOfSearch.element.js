class clickOnFirstSearchResult{
    get firstElementPage()
    {
        return $("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]")
    }

    get textOfTitle()
    {
        return $("//span[@class='a-size-large product-title-word-break']")
    }

}

module.exports =new clickOnFirstSearchResult()