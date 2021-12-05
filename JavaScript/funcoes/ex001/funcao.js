//Exercício 1
function execute(){
    let firstUserNumber = parseInt(document.getElementById('first-user-input').value)
    let secondUserNumber = parseInt(document.getElementById('second-user-input').value)
    let result = document.getElementById('res')
 
    if(firstUserNumber == secondUserNumber){
        sum = firstUserNumber + secondUserNumber
        result.innerHTML = `A soma de ${firstUserNumber} + ${secondUserNumber} é igual a <strong>${sum}</strong>`
    }else{
         multiplication = firstUserNumber * secondUserNumber
        result.innerHTML = `A multiplicação  de ${firstUserNumber} x ${secondUserNumber} é igual a <strong>${multiplication}</strong>`
    }
}