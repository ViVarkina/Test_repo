const {printEvenNumbers}=require("./printEvenNumbers")

describe("printEvenNumbers", () => {
    test("printEvenNumbers positive", ()=>{
        // expect(printEvenNumbers(10)).toEqual(2 4 6 8 10)
        expect(printEvenNumbers(12)).toEqual("Осталось 5 минут, 0 часов")
        expect(printEvenNumbers(6)).toEqual("Осталось 7 минут, 0 часов")
    })
    test("printEvenNumbers negative", ()=>{
        expect(printEvenNumbers("ffg", 5)).toEqual("Неправильный тип переменной")
        expect(printEvenNumbers()).toEqual()
        expect(printEvenNumbers()).toEqual()
    })
});