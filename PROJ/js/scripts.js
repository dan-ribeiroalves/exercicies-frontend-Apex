class Validator{
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    validate(form){
        let inputs = form.getElementsByTagName('input')
        let inputsArray = [...inputs]

        inputsArray.forEach(function(input){
         
         for(let i = 0; this.validations.lenhtn > i; i++){
            if(input.getAttribute(this.validations[i]) !=null){
                console.log(input.getAttribute(this.validations[i]))
                console.log('achou validação')
            }  
         }   

        },this)
                     
        
    }

}

    function takingTheValues(){
        let product = document.getElementById('product').value
        let price = document.getElementById('salesprice').value
        let costPrice = document.getElementById('costprice').value
        let internalCode = document.getElementById('internalcode').value
        let salesSection = document.getElementById('salessession').value

        return [product, price, costPrice, internalCode, salesSection]
    }


class Product {
    constructor(product, price, costPrice, internalCode, salesSection) {
    this.product = product
    this.price = price
    this.costPrice = costPrice
    this.internalCode = internalCode
    this.salesSection = salesSection
    
    }
}

    function creatingTheProduct(){
        let [nameProduct, valuePrice, valueCostPrice, valueInternalCode, locationSalesSection] = takingTheValues()
        let newProduct = new Product(nameProduct, valuePrice, valueCostPrice, valueInternalCode, locationSalesSection)

        return newProduct
    }

    function createTableHead(){
        let renderedTable = document.getElementById('renderedTable')
        console.log(renderedTable.value)
        if(!renderedTable.value){           
        let tableHead = document.querySelector('thead')
        let template1 = document.querySelector('#template1')
        list_th = template1.content.querySelectorAll("th")
        let newHead = document.importNode(template1.content, true)
        tableHead.appendChild(newHead)
        renderedTable.value = true
        }
    }

    function createTableBody(newProduct){
        let tableBody = document.querySelector('tbody')
        let template = document.querySelector("#template2")
        list_td = template.content.querySelectorAll("td")
        list_td[0].textContent = newProduct.product
        list_td[1].textContent = newProduct.price
        list_td[2].textContent = newProduct.costPrice
        list_td[3].textContent = newProduct.internalCode
        list_td[4].textContent = newProduct.salesSection
        let newLine = document.importNode(template.content,true)
        tableBody.appendChild(newLine)
    }

    let validator = new Validator()

    let form = document.getElementById('register-form')
    let button = document.getElementById('btn-button')

    button.addEventListener('click',function addingNewProduct(e){
        validator.validate(form)
        
        e.preventDefault()
        createTableHead()
        let newProduct = creatingTheProduct()
        createTableBody(newProduct)
        
    } )

    