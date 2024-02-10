//7

function applyDiscount(price, discount) {
    if (!price && typeof price !== "number") {
        return "Введите данные"
    }
    if (!discount && typeof discount !== "number") {
        return "Введите данные"
    }
    if (typeof price !== "number" && discount !== "number") {
        return  "Неправильный тип переменной, введите числовую переменную"
    }
    else if (price < 0 && discount < 0) {
        return "Число не может быть меньше 0"
    }
    else if (discount > 100) {
        return "Скидка не может быть больше 100%"
    }
    else if (price < 1000) {
        return "Скидка не действуюет на товар меньше 1000 рублей"
    }
    else {
        const sum = price * discount / 100
        return price - sum
    }
}

module.exports={applyDiscount}