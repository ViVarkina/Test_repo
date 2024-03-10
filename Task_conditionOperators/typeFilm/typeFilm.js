//18
function typeFilm(rating) {
    if (!rating && typeof rating !== "string") {
        return "Введите переменную"
    }
    else if (typeof rating !== "string") {
        return "Неправильный тип переменной"
    }
    else if (rating === "G") {
        return "Для всех возрастов"
    }
    else if (rating === "GP") {
        return "Детям рекомендуется смотреть в сопровождении взрослых"
    }
    else if (rating === "GP-13") {
        return "Для детей старше 13 лет"
    }
    else if (rating === "R") {
        return "Для лиц старше 17 лет"
    }
    else {
        return "Такого рейтинга нет"
    }
}

module.exports={typeFilm}