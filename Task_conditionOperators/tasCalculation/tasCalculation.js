//16

function tasCalculation(price) {
    if (!price && typeof price !== "number") {
        return "Введите данные"
    }
    if (typeof price !== "number" ) {
        return  "Неправильный тип переменной"
    }
    else if (price < 0) {
        return "Число не может быть меньше 0"
    }
    else if (price < 10000) {
        return price * 13 / 100
    }
    else if (price > 10000) {
        return price * 20 / 100
    }
}

module.exports={tasCalculation}