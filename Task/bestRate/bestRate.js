//21

function bestRate(minutes, messages) {
    if (!minutes && typeof minutes !== "number") {
        return "Введите данные"
    }
    else if (typeof minutes !== "number" || typeof messages !== "number") {
        return "Неправильный тип переменной"
    }
    else if (!messages && typeof messages !== "number") {
        return "Введите данные"
    }
    else if (minutes < 0 || messages < 0) {
        return "Минуты или сообщения не могут быть меньше 0"
    }
    else if (minutes <= 100 && messages <= 30) {
        return "Плохой тариф"
    }
    else if (minutes >= 250 && messages >= 60) {
        return "Нормальный тариф"
    }
    else if (minutes >= 600 && messages >= 200) {
        return "Хороший тариф"
    }
    else if (minutes >= 1000 && messages >= 400) {
        return "Отличный тариф"
    }
    else {
        return "Слишком большой разброс показателей"
    }
}

module.exports={bestRate}

// Не решен