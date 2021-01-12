const loginelements= require('../Elements/loginElements')
const elementutil=require('../Utilities/Element.util')
//const page=require('../pages/Page')

class loginpage{ 

       /*  open () {
                return super.open('login');
            }
 */
        verifylogin (emailID, pwd) {

                loginelements.signin.click();
                loginelements.Username.setValue(emailID);
                loginelements.continue.click();
                loginelements.Password.setValue(pwd);
                loginelements.checkbox.click()
                loginelements.btnSubmit.click(); 
        }

        
}
 module.exports= new loginpage();
