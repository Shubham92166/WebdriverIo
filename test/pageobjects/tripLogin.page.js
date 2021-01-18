const data =require('../data/tripLogin.data');
//const { EmailID } = require('../elements/tripLogin.elements');
const loginelem=require('../elements/tripLogin.elements')


class tripLoginPage{


   login () {
    
       loginelem.loginBtn.click();
       //browser.clearElement(loginelem.EmailID);
       loginelem.EmailID.setValue(data.username);
       loginelem.continue.click();
       loginelem.password.setValue(data.password);
       loginelem.login.click();
   }

   

   

}
module.exports=new tripLoginPage(); 