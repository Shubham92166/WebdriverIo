const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
// const {userName, password}=require("../data/login.data");
const LoginData = require('../data/login.data')
const {switchToWindowContaining}  = require("../../Utilities/browser.util")


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(LoginData.userName, LoginData.password)
        // LoginPage.login(userName, password);
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        
            switchToWindowContaining("DELL");
        
    });
});


