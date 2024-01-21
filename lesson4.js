

// 1
function isAdult(age) {
    if (typeof age !== "number") {
        console.log("Неправильный тип переменной")
    }
    else if (age === 0) {
        console.log("Вы еще не родились")
    }
    else if (age < 0) {
        console.log("Число меньше 0")
    }
    else if (age >= 18) {
        console.log("true")
    }
    else {
        console.log("false")
    }

}
module.exports={isAdult}

// isAdult(true)
// isAdult(9)
// isAdult(100)
// isAdult(-1)
// isAdult("бебееб")

//2

function findMax(num1, num2) {
    if (typeof num1 !== "number" && typeof num2 !== "number") {
        console.log("Неправильный тип переменной")
    }
    else if (num1 > num2) {
        console.log(`${num1} большее из чисел`)
    }
    else if (num1 < num2) {
        console.log(`${num2} большее из чисел`)
    }
    else if (num1 === num2) {
        console.log("Они равны")
    }
}
// findMax(1,2)
// findMax(1,1)
// findMax(-1,2)
// findMax(111,2)
// findMax(0,28)
// findMax(1,-2)

//3 ?
function convertScoreToGrade(score){
    if (typeof score !== "number") {
        console.log("Введите число")
    }
    else if (typeof score === "number") {
        score =typeof String("score")
        console.log("score")
    }
}

// convertScoreToGrade(4)

// 4

function number(n) {
    if (typeof n !== "number") {
        console.log("Неправильный тип переменной")
    }
    else if (n === 0) {
        console.log("ноль")
    }
    else if (n === 1) {
        console.log("один")
    }
    else if (n === 2) {
        console.log("два")
    }
    else if (n === 3) {
        console.log("три")
    }
    else if (n === 4) {
        console.log("четыре")
    }
    else if (n === 5) {
        console.log("пять")
    }
    else if (n === 6) {
        console.log("шесть")
    }
    else if (n === 7) {
        console.log("семь")
    }
    else if (n === 8) {
        console.log("восемь")
    }
    else if (n === 9) {
        console.log("девять")
    }
    else {
        console.log("Ведите число от 0 до 9")
    }
}

// number(1)
// number(10)
// number(true)
// number("")
// number(6)
// number(8)
// number(-1)
// number([])


//5 ?

function calculationMemory(size, unit) {
    if (typeof size !== "number") {
        console.log("Неправильный тип переменной, введите числовую переменную")
    }
    else if (unit === "Кб" || "кб" || "Kб" || "kб" || "Мб" || "мб" || "Mб" || "Гб" || "гб") {
        if (unit === "Кб" || "кб" || "Kб" || "kб") {
            console.log(size * 1024)
        }
        else if (unit === "Мб" || "мб" || "Mб") {
            console.log(size * 1024 * 1024 )

        }
        else if (unit === "Гб" || "гб") {
            console.log(size * 1024 * 1024 * 1024)
        }
    }
    else {
        console.log("Неправильный тип переменной")
    }

}

// calculationMemory(10, "Кб")
// calculationMemory(10, "Гб")
// calculationMemory(12, "Mб")
// calculationMemory("fdf", "Mб")
// calculationMemory(12, "fgfg")


//6 ?
function averageMeaning(num1, num2, num3) {
    if (typeof num1 && num2 && num3 !== "number") {
        console.log("Неправильный тип переменной")
    }
    else {
        console.log(num1 + num2 + num3)
    }
}

// averageMeaning(1,2,3)
// averageMeaning(3,3,3)
// averageMeaning(0,3,3)

// 7

function applyDiscount(price, discount) {
    if (typeof price !== "number" && discount !== "number") {
        console.log("Неправильный тип переменной, введите числовую переменную")
    }
    else if (price < 0 && discount < 0) {
        console.log("Число не может быть меньше 0")
    }
    else if (discount > 100) {
        console.log("Скидка не может быть больше 100%")
    }
    else if (price < 1000) {
        console.log("Скидка не действуюет на товар меньше 1000 рублей")
    }
    else {
        const sum = price * discount / 100
        console.log(price - sum)
    }
}

// applyDiscount(10, 90)
// applyDiscount(1200, 101)
// applyDiscount(1200, 50)
// applyDiscount(1569, 25)

//8, 9 ?


//10

function classifyTemperature(temp) {
    if (typeof temp !== "number") {
        return("Неправильный тип переменной")
    }
    else if (temp < 0) {
        return("Холодно")
    }
    else if (temp > 20) {
        return("Жарко")
    }
    else {
        return("Тепло")
    }
}

// console.log(classifyTemperature(9))
// console.log(classifyTemperature(5))
// console.log(classifyTemperature(true))
// console.log(classifyTemperature(-2))
// console.log(classifyTemperature(100))
// console.log(classifyTemperature(""))

//11 ?

function isEven(number) {
    if (typeof number !== "number") {
        return("Неправильный тип переменной")
    }
    else if (number / 2 % 0) {
        return ("true")
    }
    else {
        return ("false")
    }
}

// console.log(isEven(2))
// console.log(isEven(25))
// console.log(isEven(""))
// console.log(isEven(8))
// console.log(isEven(33))
// console.log(isEven(true))

//12

function calculateDeliveryCost(distance, isFragile) {
    if (typeof distance !== "number") {
        console.log("Неправильный тип переменной")
    }
    else if (distance <= 0) {
        console.log("Число не должно меньше или равно 0")
    }
    else if (isFragile !== "-" && isFragile !== "+") {
        console.log("Ваш товар хрупкий? да+ нет-")
    }
    else if (isFragile === "+") {
        console.log(distance * 5 + 10)
    }
    else if (isFragile === "-") {
        console.log(distance * 5)
    }
}

// calculateDeliveryCost(1, "-")
// calculateDeliveryCost(5, "+")
// calculateDeliveryCost(1, "ggjj")
// calculateDeliveryCost("knvjdfv", "-")
// calculateDeliveryCost(-1, "+")

//13

function ageRange(age) {
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

// console.log(ageRange(1))
// console.log(ageRange(true))
// console.log(ageRange(13))
// console.log(ageRange(19))
// console.log(ageRange("12"))
// console.log(ageRange(0))
// console.log(ageRange(-1))
// console.log(ageRange(1))
// console.log(ageRange(14))

//14

function  getSeason(month) {
    if (typeof month !== "number") {
        return("Неправильный тип переменной")
    }
    else if (month === 12 || month === 1 || month === 2) {
        return ("Зима")
    }
    else if (month === 3 || month === 4 || month === 5) {
        return ("Весна")
    }
    else if (month === 6 || month === 7 || month === 8) {
        return ("Лето")
    }
    else if (month === 9 || month === 10 || month === 11) {
        return ("Осень")
    }
    else {
        return ("Введи цифру от 1-12")
    }
}

// console.log(getSeason(3))
// console.log(getSeason(12))
// console.log(getSeason([]))
// console.log(getSeason(10))
// console.log(getSeason(""))
// console.log(getSeason(3100))
// console.log(getSeason(7))

//15

function dayOfTheWeek(day) {
    if (typeof day !== "number") {
        console.log("Неправильный тип переменной")
    }
    else if (day === 6 || day === 7 ) {
        console.log("Выходной")
    }
    else if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
        console.log("Ну это уже не выходной :(")
    }
    else {
        console.log("Введите число от 1 до 7")
    }
}

// dayOfTheWeek(1)
// dayOfTheWeek(6)
// dayOfTheWeek(7)
// dayOfTheWeek("")
// dayOfTheWeek({})
// dayOfTheWeek(1000)

//16 ?

//17

function ageRange(age) {
    if (typeof age !== "number") {
        return("Неправильный тип переменной")
    }
    else if (age <= 0) {
        return "Ты еще не родился"
    }
    else if (age < 7) {
        return "15%"
    }
    else if (age < 17) {
        return  "10%"
    }
    else if (age < 65) {
        return "Без скидки"
    }
    else {
        return "20%"
    }
}


// console.log(ageRange(1))
// console.log(ageRange(true))
// console.log(ageRange(13))
// console.log(ageRange(19))
// console.log(ageRange("12"))
// console.log(ageRange(0))
// console.log(ageRange(-1))
// console.log(ageRange(1))
// console.log(ageRange(140))

//18

function film(rating) {
    if (typeof rating !== "string") {
        console.log("Неправильный тип переменной")
    }
    else if (rating === "G") {
        console.log("Для всех возрастов")
    }
    else if (rating === "GP") {
        console.log("Детям рекомендуется смотреть в сопровождении взрослых")
    }
    else if (rating === "GP-13") {
        console.log("Для детей старше 13 лет")
    }
    else if (rating === "R") {
    console.log("Для лиц старше 17 лет")
    }
    else {
        console.log("Такого рейтинга нет")
    }
}

// film("G")
// film("R")
// film(true)
// film({})
// film("")
// film(0)

//19

function  days(watch) {
    if (typeof watch !== "number") {
        return ("Неправильный тип переменной")
    }
    else if (watch === 0 || watch === 1 || watch === 2 || watch === 3 || watch === 4 || watch === 5) {
        return ("ночь")
    }
    else if (watch === 6 || watch === 7 || watch === 8 || watch === 9 || watch === 10 || watch === 11) {
        return ("утро")
    }
    else if (watch === 12 || watch === 13 || watch === 14 || watch === 15 || watch === 16 || watch === 17) {
        return ("день")
    }
    else if (watch === 18 || watch === 19 || watch === 20 || watch === 21 || watch === 22 || watch === 23) {
        return ("вечер")
    }
    else {
        return ("Введи цифру от 0-23")
    }
}

// console.log(days(3))
// console.log(days(2))
// console.log(days(1))
// console.log(days(""))
// console.log(days(true))
// console.log(days(26))
// console.log(days(13))
// console.log(days(7))
// console.log(days(23))

//20

