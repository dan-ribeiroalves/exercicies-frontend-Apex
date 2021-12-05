let numberGrid = [[],[],[],[]]
let sum = 0
let userEnteringNumber = 0
let numberGridAverage = 0 

for(i = 0; i < 4; i++){
    for(j = 0; j < 4; j++){
        userEnteringNumber = parseFloat(window.prompt('Digite um numero:'))
        sum += userEnteringNumber
        numberGrid [i][j] = userEnteringNumber
    }              
}

numberGridAverage = sum / 16

console.log(numberGrid)

document.write(`A soma dos valores é: ${sum} e a média é: ${numberGridAverage}`)