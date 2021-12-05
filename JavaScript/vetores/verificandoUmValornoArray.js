let userNumbers = []
let userEnteringNumbers = 0
let counter = 0

for(i = 0; i < 5; i++){
    userEnteringNumbers = parseFloat(window.prompt('Digite um número:'))
    userNumbers.push(userEnteringNumbers)
    if(userEnteringNumbers === 10){
        counter++
    }
    
}
document.write(`Numeros inseridos: {${userNumbers}}, o número "10" foi inserido ${counter} vezes`)

