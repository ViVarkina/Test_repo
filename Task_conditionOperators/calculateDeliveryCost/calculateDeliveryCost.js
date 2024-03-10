//12

function calculateDeliveryCost(distance, isFragile) {
    if (!distance && typeof distance !== "number") {
        return "Введите данные"
    }
    if (!isFragile && typeof isFragile !== "string") {
        return "Введите данные"
    }
    else if (typeof distance !== "number") {
        return "Неправильный тип переменной"
    }
    else if (isFragile !== "-" && isFragile !== "+") {
        return "Ваш товар хрупкий? да+ нет-"
    }
    else if (distance <= 0) {
        return "Число не должно меньше или равно 0"
    }
    else if (isFragile === "+") {
        return distance * 5 + 10
    }
    else if (isFragile === "-") {
        return distance * 5
    }
}

module.exports={calculateDeliveryCost}