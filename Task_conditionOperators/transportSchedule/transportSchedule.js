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
    else if(hours > 24 || hours < 0) {
        return "Число не должно быть больше 24 и меньше 0"
    }
    else if(minutes > 60 || minutes < 0){
        return "Число не должно быть больше 60 и меньше 0"
    }
    else if (hours >=0 && hours < 5) {
        return "Первый автобус в 5 утра"
    }
    else if (minutes <15) {
        let min
        min = 15 - minutes
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <30) {
        let min
        min = 30 - minutes
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <45) {
        let min
        min = 45 - minutes
        return `Осталось ${min} минут, 0 часов`
    }
    else if (minutes <60) {
        let min
        min = 60 - minutes
        return `Осталось ${min} минут, 0 часов`
    }
}

module.exports={transportSchedule}

