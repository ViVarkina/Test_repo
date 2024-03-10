//26


function typeTransport(speed) {
    if (!speed && typeof speed !== "number") {
        return "Введите данные"
    }
    if (typeof speed !== "number") {
        return "Неправильный тип переменной"
    }
    else if (speed < 0) {
        return "Число не может быть меньше 0"
    }
    else if (speed === 0) {
        return "ты стоишь чел"
    }
    else if (speed < 40) {
        return "велосипед"
    }
    else if (speed < 80) {
        return "мопед"
    }
    else if (speed < 200) {
        return  "легковой автомобиль"
    }
    else if (speed > 200) {
        return "спортивный автомобиль"
    }
}

module.exports={typeTransport}


