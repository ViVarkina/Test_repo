//32

function financialAnalysis(income, expenses){
    if (!income && typeof income !== "number") {
        return "Введите данные"
    }
    else if (typeof income !== "number") {
        return "Неправильный тип переменной"
    }
    else if (!expenses && typeof expenses !== "number") {
        return "Введите данные"
    }
    else if (typeof expenses !== "number") {
        return "Неправильный тип переменной"
    }
    else if (income < 0) {
        return "Число не может быть меньше 0"
    }
    else if (expenses < 0) {
        return "Число не может быть меньше 0"
    }
    if (income > expenses){
        let balance = income - expenses
        return `Транцакция проведина успешно. Ваш текущий баланч = ${balance}`
    }
    else {
        return "Недостаточно денег для покупки"
    }
}


module.exports={financialAnalysis}