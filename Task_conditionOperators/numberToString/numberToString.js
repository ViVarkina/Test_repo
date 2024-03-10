//4

function numberToString(n) {
    if (!n && typeof n !== "number") {
        return "Введите число"
    }
    else if (typeof n !== "number") {
        return "Неправильный тип переменной"
    }
    else if (n === 0) {
        return "ноль"
    }
    else if (n === 1) {
        return "один"
    }
    else if (n === 2) {
        return "два"
    }
    else if (n === 3) {
        return "три"
    }
    else if (n === 4) {
        return "четыре"
    }
    else if (n === 5) {
        return "пять"
    }
    else if (n === 6) {
        return "шесть"
    }
    else if (n === 7) {
        return "семь"
    }
    else if (n === 8) {
        return "восемь"
    }
    else if (n === 9) {
        return "девять"
    }
    else {
        return "Ведите число от 0 до 9"
    }
}

module.exports={numberToString}