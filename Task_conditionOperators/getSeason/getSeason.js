//14

function  getSeason(month) {
    if (!month && typeof month !== "number") {
        return "Введите данные"
    }
    if (typeof month !== "number") {
        return("Неправильный тип переменной")
    }
    else if (month === 12 || month === 1 || month === 2) {
        return ("Зима")
    }
    else if (month === 3 || month === 4 || month === 5) {
        return ("Весна")
    }
    else if (month === 6 || month === 7 || month === 8) {
        return ("Лето")
    }
    else if (month === 9 || month === 10 || month === 11) {
        return ("Осень")
    }
    else {
        return ("Введи цифру от 1-12")
    }
}

module.exports={getSeason}