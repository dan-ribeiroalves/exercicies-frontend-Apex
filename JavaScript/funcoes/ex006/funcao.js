function getUserData(){
    let userInput = document.getElementById('user-input').value
    let inputedValues = userInput.split(',')
    return inputedValues
}
function calculateSummatory(numbersList){
    let [firstNumber, second, third, fourth, fifth] = numbersList
    
    return parseFloat(firstNumber) + parseFloat(second) +  parseFloat(third) +  parseFloat(fourth) + parseFloat(fifth)
}

function execute(){
    let userInputs = getUserData()
    let response = calculateSummatory(userInputs)
    console.log(response)
}