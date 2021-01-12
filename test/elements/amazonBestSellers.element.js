class AmazonBestSellers {

    get bestSellers() {return $('//a[@data-csa-c-content-id="nav_cs_bestsellers"]')}
    get electronics() {return $('//a[text()="Electronics"]')}
    get electronicItem() {return $('//div[text()="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"]')}
    get addToCartButton() {return $('#add-to-cart-button')}
}

module.exports =new AmazonBestSellers()