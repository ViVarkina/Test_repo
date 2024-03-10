//27

function optimalWay(way) {
    if (!way && typeof way !== "number") {
        return "Введите данные"
    }
    else if (typeof way !== "number") {
        return("Неправильный тип переменной")
    }
    else if (way <= 0) {
        return "Ты не едешь"
    }
    else if (way <50) {
        return "Лучше на автобусе"
    }
    else if (way < 1000) {
        return "Лучше на поезде"
    }
    else if (way > 1000) {
        return "Лучше на самолете"
    }
}

module.exports={optimalWay}