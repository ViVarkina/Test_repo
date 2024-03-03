const {isEven}=require("./isEven")

describe("isEven", () =>{
    test("isEven poditive", ()=>{
        expect(isEven(2)).toEqual("true")
        expect(isEven(25)).toEqual("false")
        expect(isEven(106)).toEqual("true")
    })
    test("isEven negative", ()=>{
        expect(isEven()).toEqual("Введите данные")
        expect(isEven("jghg")).toEqual("Неправильный тип переменной")
        expect(isEven(0)).toEqual("0 не является четным числом")
    })
})