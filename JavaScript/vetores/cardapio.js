let itemsChosenByTheUser = ['']
let menuValues = [20,25,30,35,40,45,50,55,60,80]
let userChoosing = true
let foodMenu = 0
let valueOfTheOrder = 0

while(userChoosing){
    foodMenu = parseInt(window.prompt(`
    Essas são nossas opções de Hambúrguer:
    1 - X JavaScript R$20,00
    2 - X Python R$25,00
    3 - X Java R$30,00
    4 - X PHP R$35,00
    5 - X C# R$40,00
    6 - X TypeScript R$45,00
    7 - X Kotlin R$50,00
    8 - X Back End R$55,00
    9 - X Front-End R$60,00
    10 - X Full-Stack R$80,00
    11 - Encerrar pedido
    `))
    switch (foodMenu) {
        case 1:
            itemsChosenByTheUser.push('X JavaScript')
            valueOfTheOrder += menuValues[0]
            alert('Pedido adicionado!')   
            break;
        case 2:
            itemsChosenByTheUser.push('X Python')
            valueOfTheOrder += menuValues[1]
            alert('Pedido adicionado!')    
            break;
        case 3:
            itemsChosenByTheUser.push('X Java')
            valueOfTheOrder += menuValues[2]
            alert('Pedido adicionado!')     
            break;
        case 4:
            itemsChosenByTheUser.push('X PHP')
            valueOfTheOrder += menuValues[3]
            alert('Pedido adicionado!')     
            break;
        case 5:
            itemsChosenByTheUser.push('X C#')
            valueOfTheOrder += menuValues[4]
            alert('Pedido adicionado!')     
            break;
        case 6:
            itemsChosenByTheUser.push('X TypeScript')
            valueOfTheOrder += menuValues[5]
            alert('Pedido adicionado!')     
            break;
        case 7:
            itemsChosenByTheUser.push('X Kotlin')
            valueOfTheOrder += menuValues[6]
            alert('Pedido adicionado!')     
            break;
        case 8:
            itemsChosenByTheUser.push('X Back End')
            valueOfTheOrder += menuValues[7]
            alert('Pedido adicionado!')     
            break;
        case 9:
            itemsChosenByTheUser.push('X Front-End')
            valueOfTheOrder += menuValues[8]
            alert('Pedido adicionado!')     
            break;
        case 10:
            itemsChosenByTheUser.push('X Full-Stack')
            valueOfTheOrder += menuValues[9]
            alert('Pedido adicionado!')     
            break;
        case 11:
            alert('Obrigado pela preferencia! :)')
            userChoosing = false
            break;    
        default:
            break;
    }
}

document.write(`Seu pedido foi: ${itemsChosenByTheUser}<br> 
                  Valor da conta: R$${valueOfTheOrder}`)

