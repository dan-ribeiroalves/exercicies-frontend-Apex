let userNumbers = []
let userEnteringNumbers = 0
let sumOfValues = 0
let averageOfValues = 0
let numbersEqualToAverage = 0

for(i = 0; i < 7; i++){
    userEnteringNumbers = parseFloat(window.prompt('Digite um número'))
    userNumbers.push(userEnteringNumbers)
    sumOfValues += userNumbers[i]  
}
averageOfValues = (sumOfValues / userNumbers.length).toFixed(2)

for(i = 0; i < userNumbers.length; i++){
    if(userNumbers[i] >= averageOfValues){
        numbersEqualToAverage++
    }
}

document.write(`Números inseridos: {${userNumbers}}<br>
                Soma dos números:${sumOfValues}<br> 
                Média dos valores ${averageOfValues}<br>
                Quantidade de números maiores ou iguais a média: ${numbersEqualToAverage}`)