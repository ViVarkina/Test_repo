//24

function seasonDiscount(month) {
    if (!month && typeof month !== "number") {
        return "Введите данные"
    }
    if (typeof month !== "number") {
        return("Неправильный тип переменной")
    }
    else if (month === 12 || month === 1 || month === 2) {
        return "Скидка 20%"
    }
    else if (month === 3 || month === 4 || month === 5) {
        return "Скидка 10%"
    }
    else if (month === 6 || month === 7 || month === 8) {
        return "Нет скидки"
    }
    else if (month === 9 || month === 10 || month === 11) {
        return "Скидка 15%"
    }
    else {
        return "Введи цифру от 1-12"
    }
}

module.exports={seasonDiscount}