class AmazonWhislistElements {

    searchText = 'novels'
    novelTitle = 'A Thing Beyond Forever'

    get searchBox () {return $('#twotabsearchtextbox')}
    get searchButton () {return $('#nav-search-submit-button')}
    get novel () {return $('//span[text()="A Thing Beyond Forever"]')}
    get whislistButton () {return $('#wishListMainButton-announce')}
    get emailOrMobileno () {return $('//label')}
}

module.exports = new AmazonWhislistElements()