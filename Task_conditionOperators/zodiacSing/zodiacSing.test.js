const {zodiacSing}=require("./zodiacSing")

describe("zodiacSing", ()=>{
    test("zodiacSing positive", ()=>{
        expect(zodiacSing("Овен")).toEqual("Близнец и Телец")
        expect(zodiacSing("Стрелец")).toEqual("Рыбы и Козерог")
        expect(zodiacSing("Рыбы")).toEqual("Скорпион и Близнецы")
        expect(zodiacSing("Скорпион")).toEqual("Рыбы и Лев")
    })
    test("zodiacSing negative", ()=>{
        expect(zodiacSing()).toEqual("Введите данные")
        expect(zodiacSing(-18)).toEqual("Неправильный тип переменной")
        expect(zodiacSing("gkfkgf")).toEqual("Напишите ваш знак зодиака")
    })
})