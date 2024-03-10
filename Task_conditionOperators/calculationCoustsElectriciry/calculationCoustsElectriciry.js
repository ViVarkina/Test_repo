//20

function calculationCoustsElectriciry(energy) {
    if (!energy && typeof energy !== "number") {
        return "Введите данные"
    }
    else if (typeof energy !== "number") {
        return "Неправильный тип переменной"
    }
    else if (energy < 0) {
        return "Число не может быть меньше 0"
    }
    else if (energy < 100) {
        return "Тариф А"
    }
    else if (energy <= 500) {
        return "Тариф Б"
    }
    else if (energy > 500) {
        return "Тариф В"
    }
}

module.exports={calculationCoustsElectriciry}