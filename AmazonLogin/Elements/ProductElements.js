class AddProduct{

    get addToCart() { return $("//input[@id='add-to-cart-button']")}
    get quantity() { return $("//select[@id='quantity']") }
    get Image() { return $("//img[@id='landingImage']") }
    
    
}
module.exports=new AddProduct()