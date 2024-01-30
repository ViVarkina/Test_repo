//19

function  timeDays(watch) {
    if (!watch && typeof watch !== "number") {
        return "Введите данные"
    }
    else if (typeof watch !== "number") {
        return ("Неправильный тип переменной")
    }
    else if (watch === 0 || watch === 1 || watch === 2 || watch === 3 || watch === 4 || watch === 5) {
        return ("ночь")
    }
    else if (watch === 6 || watch === 7 || watch === 8 || watch === 9 || watch === 10 || watch === 11) {
        return ("утро")
    }
    else if (watch === 12 || watch === 13 || watch === 14 || watch === 15 || watch === 16 || watch === 17) {
        return ("день")
    }
    else if (watch === 18 || watch === 19 || watch === 20 || watch === 21 || watch === 22 || watch === 23) {
        return ("вечер")
    }
    else {
        return ("Введи цифру от 0-23")
    }
}

module.exports={timeDays}