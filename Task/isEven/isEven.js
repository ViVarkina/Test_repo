// 11

function isEven(number) {
    if (!number && typeof number !== "number") {
        return "Введите данные"
    }
    else if (typeof number !== "number") {
        return("Неправильный тип переменной")
    }
    else if (number < 0) {
        return "Число меньше 0"
    }
    else if (number % 2 === 0) {
        return ("true")
    }
    else {
        return ("false")
    }
}

module.exports={isEven}