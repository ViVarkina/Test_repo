//13

function ageRange(age) {
    if (!age && typeof age !== "number") {
        return "Введите данные"
    }
    if (typeof age !== "number") {
        return("Неправильный тип переменной")
    }
    else if (age <= 0) {
        return "Ты еще не родился"
    }
    else if (age < 12) {
        return "Ребенок"
    }
    else if (age < 18) {
        return  "Подросток"
    }
    else if (age < 65) {
        return "Взрослый"
    }
    else {
        return "Пенсионер"
    }
}

module.exports={ageRange}