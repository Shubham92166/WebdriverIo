class loginElements{

    get signin() { return $("//a[@id='nav-link-accountList']") }
    get Username () { return $('#ap_email') }
    get continue() {return $('#continue') }
    get Password () { return $('#ap_password') }
    get checkbox() { return $("//div[@class='a-checkbox']/label/input")}
    get btnSubmit () { return $('#signInSubmit') }
}
module.exports=new loginElements();