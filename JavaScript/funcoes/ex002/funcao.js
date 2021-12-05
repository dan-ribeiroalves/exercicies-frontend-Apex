//Exercício 2

function exerciseTwo(){
    let firstUserNumber = parseInt(document.getElementById('first-user-input').value)
    let result = document.getElementById('res')
      exponential = firstUserNumber * firstUserNumber
      result.innerHTML = `O número ${firstUserNumber}<sup>2</sup> é igual a <strong>${exponential}</strong>`    
}


