const isPresentInAllTheElementText = (listOfElements,partialText) =>{​​​​​
    let ifAllElmentsContainsText  = true;
    for(let text of listOfElements.map(elem=>elem.getText())){​​​​​
    ifAllElmentsContainsText = text.includes(partialText)
        }​​​​​
    returnifAllElmentsContainsText
    }​​​​​

module.exports = {isPresentInAllTheElementText}    
