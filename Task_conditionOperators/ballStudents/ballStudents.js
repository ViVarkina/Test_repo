//25

function ballStudents(ball) {
    if (!ball && typeof ball !== "number") {
        return "Введите данные"
    }
    if (typeof ball !== "number") {
        return "Неправильный тип переменной"
    }
    else if (ball < 0) {
        return "Число не может быть меньше 0"
    }
    else if (ball < 3) {
        return "неудовлетворительно"
    }
    else if (ball < 3.5) {
        return "удовлетворительно"
    }
    else if (ball < 4.5) {
        return  "хорошо"
    }
    else if (ball > 4.5) {
        return "хорошо"
    }
}

module.exports={ballStudents}