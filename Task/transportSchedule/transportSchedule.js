//30

function transportSchedule(hours, minutes) {
    if (!minutes && typeof minutes !== "number") {
        return "Введите данные"
    }
    else if (typeof minutes !== "number") {
        return "Неправильный тип переменной"
    }
    else if (!hours && typeof hours !== "number") {
        return "Введите данные"
    }
    else if (typeof hours !== "number") {
        return "Неправильный тип переменной"
    }
    else if (minutes <15) {
        let min
        min = 15 - n
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <30) {
        let min
        min = 30 - n
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <45) {
        let min
        min = 45 - n
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <60) {
        let min
        min = 60 - n
        return `Осталось ${min} минут, 0 часов`
    }
    else if (hours >=0 && hours < 5) {
        return "Первый автобус в 5 утра"
    }
}

module.exports={transportSchedule}

//не решен