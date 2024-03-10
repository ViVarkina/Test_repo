const {tasCalculation}=require("./tasCalculation")

describe("tasCalculation", ()=> {
    test("tasCalculation positive test", ()=> {
        expect(tasCalculation(1200)).toEqual(156)
        expect(tasCalculation(2000)).toEqual(260)
        expect(tasCalculation(20000)).toEqual(4000)
        expect(tasCalculation(0)).toEqual(0)
    })
    test("tasCalculation negative test", ()=> {
        expect(tasCalculation()).toEqual("Введите данные")
        expect(tasCalculation("jfhvvn")).toEqual("Неправильный тип переменной")
        expect(tasCalculation(-87)).toEqual("Число не может быть меньше 0")
    })
})