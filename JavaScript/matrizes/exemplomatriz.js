let peopleObj = [
    { name: 'jãozin', isInvited: true, age: 17 },
    { name: 'Zé Maria', age: 200, isInvited: false },
    { name: 'Kevyn Da Jaguar', age: 24, isInvited: true }
]
const legalAge = 18
let amountOfInviteds = 0

for (let i = 0; i < peopleObj.length; i++) {
    if (peopleObj[i].age >= legalAge && peopleObj[i].isInvited) {
        amountOfInviteds++
    }
}
console.log(amountOfInviteds)