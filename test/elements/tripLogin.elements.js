class tripLoginElements{

    get loginBtn() { return $('//li[@class="makeFlex hrtlCenter font10 makeRelative lhUser"]') }
    get EmailID() { return $('//input[@id="username"]')}
    get continue() { return $('//button[@class="capText font16"]')}
    get password() {return $('//input[@id="password"]')} 
    get login() { return $('//button[@class="capText font16"]')}
    get error() { return $('//p[@class="validity font12 redText appendTop5 makeFlex"]')}
    

    
}
module.exports=new tripLoginElements();