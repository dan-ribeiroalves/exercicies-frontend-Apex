let userNumbers = []
let userEnteringNumbers = 0

for(i = 0; i < 5; i++){
    userEnteringNumbers = parseFloat(window.prompt('Digite um numero:'))
    userNumbers.push(userEnteringNumbers)
}

let smallerNumber = userNumbers[0]
for(i = 0;i < userNumbers.length; i++){
    if(userNumbers[i] < smallerNumber){
        smallerNumber = userNumbers[i]
    }      
}
let higherNumber = userNumbers[0]
for(i = 0;i < userNumbers.length; i++){
    if(userNumbers[i] > higherNumber){
        higherNumber = userNumbers[i]
    }      
}

document.write(`Números inseridos:{${userNumbers}}<br> 
Menor número: ${smallerNumber}<br>
Maior número: ${higherNumber}`)