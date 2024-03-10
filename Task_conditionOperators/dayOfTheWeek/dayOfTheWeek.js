//15

function dayOfTheWeek(day) {
    if (!day && typeof day !== "number") {
        return "Введите данные"
    }
    if (typeof day !== "number") {
        return "Неправильный тип переменной"
    }
    else if (day === 6 || day === 7 ) {
        return "Выходной"
    }
    else if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
        return "Ну это уже не выходной :("
    }
    else {
        return "Введите число от 1 до 7"
    }
}

module.exports={dayOfTheWeek}