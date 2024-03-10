const {typeTransport}=require("./typeTransport")

describe("typeTransport", ()=>{
    test("typeTransport positive", ()=>{
        expect(typeTransport(0)).toEqual("ты стоишь чел")
        expect(typeTransport(23)).toEqual("велосипед")
        expect(typeTransport(52)).toEqual("мопед")
        expect(typeTransport(140)).toEqual("легковой автомобиль")
        expect(typeTransport(320)).toEqual("спортивный автомобиль")
    })
    test("ballStudents negative", ()=>{
        expect(typeTransport()).toEqual("Введите данные")
        expect(typeTransport(-18)).toEqual("Число не может быть меньше 0")
        expect(typeTransport("gkfkgf")).toEqual("Неправильный тип переменной")
    })
})