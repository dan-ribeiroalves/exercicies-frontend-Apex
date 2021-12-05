let userEnteredValues = []
let sumOfUserValues = 0

 for(i = 0; i < 5; i++){
         userEnteredValues.push(parseFloat(window.prompt('Digite um número: ')))
        sumOfUserValues += userEnteredValues[i]        
}
document.write(`Os valores inseridos foram {${userEnteredValues}}, e a soma é: ${sumOfUserValues}`)
