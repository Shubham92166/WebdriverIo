const isPresentInAllTheElementText = (listOfElements, partialText) =>{​​​​​
    for(let text of listOfElements.map(elem=>elem.getText())){​​​​​
        if (text.includes(partialText)) return true;
    }​​​​​
    return false
}​​​​​

module.exports = {isPresentInAllTheElementText}    
