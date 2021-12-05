/* Agenda que será enviada
class AppointmentSchedule {
    appointmentOfSchedule = []

    addData(newData){
        this.appointmentOfSchedule.push(newData)
    }
}*/
//Criando um objeto que será adicionado a agenda
class UserQueryData {
    constructor(tutorName, namePet, agePet, speciesPet, procedure, consultationDate){

        this.tutorName = tutorName
        this.namePet = namePet
        this.agePet = agePet
        this.speciesPet = speciesPet
        this.procedure = procedure
        this.consultationDate = consultationDate
    }
}
    //Pegando os valores do usario
    function takingData(){

        let tutorName = document.getElementById('tutorname').value
        let namePet = document.getElementById('namepet').value
        let agePet = document.getElementById('agepet').value
        let speciesPet = document.getElementById('animalspecies').value
        let procedure = document.getElementById('procedure').value
        let consultationDate = document.getElementById('consultationdate').value

        return[tutorName, namePet, agePet, speciesPet, procedure, consultationDate]
    }
    
    function creatingCalendarData(){
        let [tutorName, namePet, agePet, speciesPet, procedure, consultationDate] = takingData()
        let newQueryData = new UserQueryData( tutorName,namePet, agePet, speciesPet, procedure, consultationDate)
        
        return newQueryData
    }

    function execute(){
        let data  = creatingCalendarData()   
    }




    


