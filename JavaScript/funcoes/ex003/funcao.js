function exerciseThree(){
    let firstUserNumber = parseInt(document.getElementById('first-user-input').value)
    let secondUserNumber = parseInt(document.getElementById('secont-user-input').value)
    let thirdUserNumber = parseInt(document.getElementById('third-user-input').value)
    let result = document.getElementById('res')
    if(firstUserNumber < secondUserNumber && firstUserNumber < thirdUserNumber){
        result.innerHTML = `O menor número é <strong>${firstUserNumber}</strong>`
    }else if(secondUserNumber < firstUserNumber && secondUserNumber < thirdUserNumber){
        result.innerHTML = `O menor número é <strong>${secondUserNumber}</strong>`
    }else if(thirdUserNumber < firstUserNumber && thirdUserNumber < secondUserNumber){
        result.innerHTML = `O menor número é <strong>${thirdUserNumber}</strong>`
    }else{
        result.innerHTML = `Números iguais <strong>${firstUserNumber}</strong> - <strong>${secondUserNumber}</strong> - <strong>${thirdUserNumber}</strong>`
    }
}