//3

function convertScoreToGrade(score) {
    if (!score && typeof score !== "number") {
        return "Введите данные"
    }
    else if (typeof score !== "number") {
        return"Неправильный тип переменной"
    }
    else if (score >= 0 && score <= 49 ) {
        return"Оценка F - неудовлетворительно"
    }
    else if (score >= 50 && score <= 59 ) {
        return"Оценка D - удовлетворительно"
    }
    else if (score >= 60 && score <= 74 ) {
        return"Оценка C - удовлетворительно"
    }
    else if (score >= 75 && score <= 89 ) {
        return"Оценка B - хорошо"
    }
    else if (score >= 90 && score <= 100 ) {
        return"Оценка А - отлично"
    }
    else if (score > 100) {
        return"Оценка не может быть больше 100"
    }
    else if (score < 0) {
        return"Оценка не может быть меньше 0"
    }
}

module.exports={convertScoreToGrade}