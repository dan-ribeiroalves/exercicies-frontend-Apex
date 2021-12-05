let courseList = []
let options = 0
let insertingCourses = true
let newCourse = ''
let removeCourse = ''

while (insertingCourses){
    options = parseInt(window.prompt(`
    1 - Cadastrar um curso
    2 - Exibir cursos
    3 - Remover um curso
    4 - Sair
    `))
    switch (options) {
        case 1:
            newCourse = window.prompt('Informe o curso que deseja cadastrar:').toUpperCase()
            courseList.push(newCourse)            
            alert('Curso adicioanado com secesso!')
            break;
        case 2:
            alert('Obrigado por usar nosso sistema! Até mais!')
            insertingCourses = false
            document.write(`Lista de cursos: ${courseList}`)         
            break;
        case 3:
            removeCourse = window.prompt('Informe o curso que deseja remover:').toUpperCase()
            courseList.splice(courseList.indexOf(removeCourse),1)
            alert('Curso removido com sucesso! Obrigado por usar nosso sistema! Até mais!')
            insertingCourses = false        
            document.write(`Lista de cursos: ${courseList}`)             
            break;
        case 4:            
            alert('Obrigado por usar nosso sistema! Até mais!')
            insertingCourses = false
            document.write(`Lista de cursos: ${courseList}`)               
            break;
    
        default:
            break;
    }
}
