class AmazonAddToCartElements {

    title = 'HP 15 Thin & Light 15.6-inch FHD Laptop (Ryzen 5 3450U/8GB/512GB SSD/Win 10/MS Office 2019/Vega 8 Graphics), 15s-eq0144AU'
    addedToCartText = 'Added to Cart'
    product = 'hp laptop'
    noThanksText = 'No, thanks.'

    get searchBox () {return $('#twotabsearchtextbox')}
    get searchButton () {return $('#nav-search-submit-button')}
    get searchProduct () {return $('//span[text()="HP 15 Thin & Light 15.6-inch FHD Laptop (Ryzen 5 3450U/8GB/512GB SSD/Win 10/MS Office 2019/Vega 8 Graphics), 15s-eq0144AU"]')}
    get addToCartButton () {return $('#add-to-cart-button')}
    get addedToCart () {return $('//h1')}
    get noThanksButton () {return $('//span[@class="a-button a-spacing-small a-button-base"]')}
}

module.exports = new AmazonAddToCartElements();