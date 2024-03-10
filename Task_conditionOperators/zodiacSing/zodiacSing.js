//28

function zodiacSing(zodiac) {
    if (!zodiac && typeof zodiac !== "string") {
        return "Введите данные"
    }
    else if (typeof zodiac !== "string") {
        return "Неправильный тип переменной"
    }
    else if (zodiac === "Овен") {
        return "Близнец и Телец"
    }
    else if (zodiac === "Телец") {
        return "Овен и Весы"
    }
    else if (zodiac === "Близнецы") {
        return "Рыбы и Дева"
    }
    else if (zodiac === "Рак") {
        return "Телец и Скорпион"
    }
    else if (zodiac === "Лев") {
        return "Стрелец и Рак"
    }
    else if (zodiac === "Дева") {
        return "Стрелец и Водолей"
    }
    else if (zodiac === "Весы") {
        return "Дева и Рак"
    }
    else if (zodiac === "Скорпион") {
        return "Рыбы и Лев"
    }
    else if (zodiac === "Стрелец") {
        return "Рыбы и Козерог"
    }
    else if (zodiac === "Козерог") {
        return "Водолец и Телец"
    }
    else if (zodiac === "Водолей") {
        return "Козерог и Стрелец"
    }
    else if (zodiac === "Рыбы") {
        return "Скорпион и Близнецы"
    }
    else {
        return "Напишите ваш знак зодиака"
    }
}

module.exports={zodiacSing}