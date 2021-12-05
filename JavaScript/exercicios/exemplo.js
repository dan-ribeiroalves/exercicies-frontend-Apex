let ages = [22, 19, 16, 17, 18]

let invitedsCount = 0

for (let i = 0; i < ages.length; i++) {

    if (ages[i] >= 18) {
        invitedsCount++
    }

}

document.write(invitedsCount)