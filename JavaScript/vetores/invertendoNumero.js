let userNumbers = []
let enteringNumbers = 0


for(i = 0; i < 5; i++){
    enteringNumbers = parseFloat(window.prompt('Digite um número: '))
    userNumbers.push(enteringNumbers)
}
for(i = userNumbers.length ; i >= 0; i--){
   console.log(userNumbers[i])
}

