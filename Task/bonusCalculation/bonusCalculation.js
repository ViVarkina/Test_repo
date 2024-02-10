//22

function bonusCalculation(expertion) {
    if (!expertion && typeof expertion !== "number") {
        return "Введите данные"
    }
    if (typeof expertion !== "number") {
        return "Неправильный тип переменной"
    }
    else if (expertion < 0) {
        return "Число не может быть меньше 0"
    }
    else if (expertion < 1) {
        return "Нет бонуса"
    }
    else if (expertion < 3) {
        return "бонус составит 10% от зарплаты"
    }
    else if (expertion < 5) {
        return  "бонус составит 20% от зарплаты"
    }
    else if (expertion > 5) {
        return "бонус составит 25% от зарплаты"
    }
}

module.exports={bonusCalculation}