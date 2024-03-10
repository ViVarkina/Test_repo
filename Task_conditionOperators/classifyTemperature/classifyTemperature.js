//10

function classifyTemperature(temp) {
    if (!temp && typeof temp !== "number") {
        return "Введите данные"
    }
    else if (typeof temp !== "number") {
        return("Неправильный тип переменной")
    }
    else if (temp < 0) {
        return("Холодно")
    }
    else if (temp > 20) {
        return("Жарко")
    }
    else {
        return("Тепло")
    }
}

module.exports={classifyTemperature}