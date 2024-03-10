//23

function userRating(publications) {
    if (!publications && typeof publications !== "number") {
        return "Введите данные"
    }
    if (typeof publications !== "number") {
        return "Неправильный тип переменной"
    }
    else if (publications < 0) {
        return "Число не может быть меньше 0"
    }
    else if (publications < 10) {
        return "новичек"
    }
    else if (publications < 50) {
        return "активный пользователь"
    }
    else if (publications > 50) {
        return "ведущий специалист"
    }
}

module.exports={userRating}