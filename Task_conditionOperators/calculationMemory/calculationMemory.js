//5

function calculationMemory(size, unit){
    if (!size && typeof size !== "number") {
        return "Введите число"
    }
    if (!unit && typeof unit !== "string") {
        return "Введите тип данных - Кб, Мб, Гб"
    }
    else if (typeof unit !== "string") {
        return "Неправильный тип переменной, введите - Кб, Мб, Гб"
    }
    else if (typeof size !== "number") {
        return "Неправильный тип переменной, введите числовую переменную"
    }
    else if (unit === "Кб" || "кб" || "Kб" || "kб") {
        return size * 1024
    }
    else if (unit === "Мб" || "мб" || "Mб") {
        return size * 1024 * 1024
    }
    else if (unit === "Гб" || "гб") {
        return size * 1024 * 1024 * 1024
    }
    else {
        return "ошибка"
    }
}

module.exports={calculationMemory}

//не решен