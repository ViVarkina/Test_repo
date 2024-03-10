//2
function findMax(num1, num2) {
    if (!num1 && typeof num1 !== "number") {
        return "Введите число"
    }
    if (!num2 && typeof num2 !== "number") {
        return "Введите число"
    }
    else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Неправильный тип переменной"
    }
    else if (num1 > num2) {
        return `${num1} большее из чисел`
    }
    else if (num1 < num2) {
        return `${num2} большее из чисел`
    }
    else if (num1 === num2) {
        return  "Они равны"
    }
}

module.exports={findMax}