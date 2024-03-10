//15

const convertMinutesToHours = (minutes) =>{
    let count = 0
    let house = 0
    let minute = 0
    while (count <= 0){
        let houseSun = minutes / 60
        let minuteSum = minutes % 60
        house += houseSun
        minute += minuteSum
        count += 1
    }
    console.log(house, minute)
}

// не решен