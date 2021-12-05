let contactBook = [[],[],[],[]]
let userInteracting = true
let options = 0
let nameContact = ''
let numberContact = 0
let selectedContact = 0
let optionToChangeOrRemoveContact = 0
let optionToChangeNameOrNumber = 0
let newName = ''
let newNumber = ''
while (userInteracting) {
    options = parseInt(window.prompt(`
    1 - Cadastrar contato
    2 - Selecionar contato / Alterar / Remover    
    3 - Sair do sistema 
    `))
    switch (options) {
        case 1:
            for(i = 0; i < 4; i++){
                for(j = 0; j < 2; j++){
                    if(j === 0){
                        nameContact = window.prompt('Digite o nome').toUpperCase()
                        contactBook[i][j] = nameContact
                    }else{
                        numberContact = window.prompt('Digite o número').toUpperCase()
                        contactBook[i][j] = numberContact
                 }                   
                }
            }                  
            break;
            case 2:
            selectedContact = parseInt(window.prompt(`Selecione o contato
            1 - ${contactBook[0][0]}
            2 - ${contactBook[1][0]}
            3 - ${contactBook[2][0]}
            4 - ${contactBook[3][0]}
            `))
                if( selectedContact === 1){
                    alert(`Contado ${contactBook[0][0]} selecionado`)
                   optionToChangeOrRemoveContact = parseInt(window.prompt(`Digite:
                    1 - Para alterar o contato
                    2 - Para remover o contato
                    `))
                    if(optionToChangeOrRemoveContact === 1){
                        optionToChangeNameOrNumber = parseInt(window.prompt(`
                        1 - Para alterar o nome
                        2 - Para alterar o numero
                        `))
                        if(optionToChangeNameOrNumber === 1){
                            newName = window.prompt('Digite o novo nome').toUpperCase()
                            contactBook[0][0] = newName
                        }else{
                            alert(`Numero a ser substituido ${contactBook[0][1]}`)
                            newNumber = window.prompt('Digite o novo numero')
                            contactBook[0][1] = newNumber
                        }
                    }else{
                        alert('Contato removido')
                        contactBook.splice([0],1)
                    }
                }else if (selectedContact === 2){
                    alert(`Contado ${contactBook[1][0]} selecionado`)
                   optionToChangeOrRemoveContact = parseInt(window.prompt(`Digite:
                    1 - Para alterar o contato
                    2 - Para remover o contato
                    `))
                    if(optionToChangeOrRemoveContact === 1){
                        optionToChangeNameOrNumber = parseInt(window.prompt(`
                        1 - Para alterar o nome
                        2 - Para alterar o numero
                        `))
                        if(optionToChangeNameOrNumber === 1){
                            newName = window.prompt('Digite o novo nome').toUpperCase()
                            contactBook[1][0] = newName
                        }else{
                            alert(`Numero a ser substituido ${contactBook[1][1]}`)
                            newNumber = window.prompt('Digite o novo numero')
                            contactBook[1][1] = newNumber
                        }
                    }else{
                        alert('Contato removido')
                        contactBook.splice([1],1)
                    }
                }else if(selectedContact === 3){
                    alert(`Contado ${contactBook[2][0]} selecionado`)
                   optionToChangeOrRemoveContact = parseInt(window.prompt(`Digite:
                    1 - Para alterar o contato
                    2 - Para remover o contato
                    `))
                    if(optionToChangeOrRemoveContact === 1){
                        optionToChangeNameOrNumber = parseInt(window.prompt(`
                        1 - Para alterar o nome
                        2 - Para alterar o numero
                        `))
                        if(optionToChangeNameOrNumber === 1){
                            newName = window.prompt('Digite o novo nome').toUpperCase()
                            contactBook[2][0] = newName
                        }else{
                            alert(`Numero a ser substituido ${contactBook[2][1]}`)
                            newNumber = window.prompt('Digite o novo numero')
                            contactBook[2][1] = newNumber
                        }
                    }else{
                        alert('Contato removido')
                        contactBook.splice([2],1)
                    }
                }else{
                    alert(`Contado ${contactBook[3][0]} selecionado`)
                   optionToChangeOrRemoveContact = parseInt(window.prompt(`Digite:
                    1 - Para alterar o contato
                    2 - Para remover o contato
                    `))
                    if(optionToChangeOrRemoveContact === 1){
                        optionToChangeNameOrNumber = parseInt(window.prompt(`
                        1 - Para alterar o nome
                        2 - Para alterar o numero
                        `))
                        if(optionToChangeNameOrNumber === 1){
                            newName = window.prompt('Digite o novo nome').toUpperCase()
                            contactBook[3][0] = newName
                        }else{
                            alert(`Numero a ser substituido ${contactBook[3][1]}`)
                            newNumber = window.prompt('Digite o novo numero')
                            contactBook[3][1] = newNumber
                        }
                    }else{
                        alert('Contato removido')
                        contactBook.splice([3],1)
                    }
                }                            
                break            
            case 3: 
            alert('Obrigado por usar nosso sistema')
                userInteracting = false
                break
    
        default:
            break;
    }
}
for(i = 0; i <contactBook.length; i++){
    for(j = 0; j < 2; j++){
        document.write(contactBook[i][j]+" ")
    }
    document.write('<hr>')
}