let namesEnteringByUser = ['']
let enteringNames = ''
let exit = true

for(i = 0; i < namesEnteringByUser.length; i++){
    enteringNames = window.prompt('Digite um nome:').toUpperCase()
    if(enteringNames != 'SAIR'){
        namesEnteringByUser.push(enteringNames)
    }else{
        exit = false
    }
}
document.write(`Os nomes inseridos foram ${namesEnteringByUser}, com um total de ${namesEnteringByUser.length -1} nomes`)