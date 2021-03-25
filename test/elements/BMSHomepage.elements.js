//shreyas
class BMSHomepage{
   
    get popup() { return $("#wzrk-cancel");}
    get RequiredCity() { return $("//*[@alt = 'BANG']");}
    get plays() { return $("//a[text() = 'Plays']");}

}

module.exports = new BMSHomepage();