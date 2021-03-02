const travellers = require("../elements/travellersdetail.element.js");
const tdata = require("../data/travellerDetails.data.js");

class travellerDetailsPage{
    name() {
        travellers.FirstName.setValue(tdata.firstName);
        travellers.Lastname.setValue(tdata.lastName)
    }
    gender() {
        travellers.gender.click();
    }
    contact(){
        travellers.mobileno.setValue(tdata.mobileNumber);
        travellers.email.setValue(tdata.email);
    }
    submit(){
        travellers.submitTraveller.waitForExist({ timeout: 10000 });
        travellers.submitTraveller.click();
    }
    revtrip(){
        travellers.Rev_tripProtection.click();
    }
    revsubmit(){
        travellers.submitReview.click();
    }
    submitSrh(){
        travellers.submitSearch.click();
    }
    tripProtection(){
        travellers.Rev_tripProtection.click();
    }
    submitReview(){
        travellers.submitReview.click();
    }

}
module.exports = new travellerDetailsPage();
