function getInputFeildById(id) {
    const inputField = document.getElementById(id).value;
    inputNumber = parseFloat(inputField)
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    textNumber = parseFloat(textValue);
    return textNumber;
}

function checkingIsNaN(variable){
    if (isNaN(variable) || variable < 0) {
        alert('Wrong Input')
        return true;
    }
    return false;
}
function checkingEnoughMoney(amount){
const myMoney = getTextValueById('my-money')
    if (amount > myMoney) {
        alert('Not enought Money')
        return true;
    }
    return false;
}

