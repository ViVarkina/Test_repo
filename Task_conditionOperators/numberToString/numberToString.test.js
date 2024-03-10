const {numberToString}=require("./numberToString")

describe("numberToString", ()=> {
    test("numberToString positive test", () =>{
        expect(numberToString(1)).toEqual("один")
        expect(numberToString(6)).toEqual("шесть")
        expect(numberToString(3)).toEqual("три")
        expect(numberToString(0)).toEqual("ноль")
    })
    test("numberToString negative test", ()=> {
        expect(numberToString("dlfnf")).toEqual("Неправильный тип переменной")
        expect(numberToString("")).toEqual("Введите число")
        expect(numberToString(20)).toEqual("Ведите число от 0 до 9")
        expect(numberToString(true)).toEqual("Неправильный тип переменной")
    })
})