const {isEven}=require("./isEven")

describe("isEven", () => {
    test("isEven positive", ()=>{
        expect(isEven(2)).toEqual("true")
        expect(isEven(15)).toEqual("false")
        expect(isEven(200)).toEqual("true")
        expect(isEven(0)).toEqual("true")
    })
    test("isEven negative", ()=>{
        expect(isEven("gdij")).toEqual("Неправильный тип переменной")
        expect(isEven()).toEqual("Введите данные")
        expect(isEven(-1)).toEqual("Число меньше 0")
    })
});