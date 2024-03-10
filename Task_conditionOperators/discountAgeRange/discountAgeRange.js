//17

function discountAgeRange(age) {
    if (!age && typeof age !== "number") {
        return "Введите данные"
    }
    else if (typeof age !== "number") {
        return "Неправильный тип переменной"
    }
    else if (age <= 0) {
        return "Ты еще не родился"
    }
    else if (age < 7) {
        return "15%"
    }
    else if (age < 17) {
        return  "10%"
    }
    else if (age < 65) {
        return "Без скидки"
    }
    else {
        return "20%"
    }
}

module.exports={discountAgeRange}