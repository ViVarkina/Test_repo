//1
function isAdult(age) {
    if (!age && typeof age !== "number") {
        return "Введите данные"
    }
    else if (typeof age !== "number") {
        return "Неправильный тип переменной"
    }
    else if (age === 0) {
        return "Вы еще не родились"
    }
    else if (age < 0) {
        return "Число меньше 0"
    }
    else if (age >= 18) {
        return "true"
    }
    else if (age > 0 && age < 18) {
        return "false"
    }
}
module.exports={isAdult}

