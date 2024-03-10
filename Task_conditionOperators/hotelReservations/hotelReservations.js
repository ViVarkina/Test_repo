//33

function hotelReservations(season, days){
    if (!days && typeof days !== "number") {
        return "Введите данные"
    }
    else if (typeof days !== "number") {
        return "Неправильный тип переменной"
    }
    else if (!season && typeof season !== "string") {
        return "Введите данные"
    }
    else if (typeof season !== "string") {
        return "Неправильный тип переменной"
    }
    else if (days <= 0){
        return "Число не должно быть меньше 0"
    }
    else if (season === "Зима") {
        let sum = days * 1000
        return sum
    }
    else if (season === "Осень") {
        let sum = days * 1500
        return sum
    }
    else if (season === "Лето") {
        let sum = days * 3500
        return sum
    }
    else if (season === "Весна") {
        let sum = days * 2500
        return sum
    }
    else{
        return "Введите сезон"
    }
}

module.exports={hotelReservations}
