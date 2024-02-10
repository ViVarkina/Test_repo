const {isAdult}=require("./isAdult")

describe("isAdult", ()=> {
    test("isAdult positive test", ()=> {
        expect(isAdult(1)).toEqual("false")
        expect(isAdult(5)).toEqual("false")
        expect(isAdult(20)).toEqual("true")
    })
    test("isAdult positive test", ()=> {
        expect(isAdult("gdij")).toEqual("Неправильный тип переменной")
        expect(isAdult()).toEqual("Введите данные")
        expect(isAdult(0)).toEqual("Вы еще не родились")
        expect(isAdult(-1)).toEqual("Число меньше 0")
    })
})
