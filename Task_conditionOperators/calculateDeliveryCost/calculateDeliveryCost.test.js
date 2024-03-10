const {calculateDeliveryCost}=require("./calculateDeliveryCost")

describe("calculateDeliveryCost", ()=>{
    test("calculateDeliveryCost positive test", ()=>{
        expect(calculateDeliveryCost(1, "-")).toEqual(5)
        expect(calculateDeliveryCost(5, "+")).toEqual(35)
    })
    test("calculateDeliveryCost negative test", ()=> {
       expect(calculateDeliveryCost(1, "ggjj")).toEqual("Ваш товар хрупкий? да+ нет-")
       expect(calculateDeliveryCost("knvjdfv", "-")).toEqual("Неправильный тип переменной")
       expect(calculateDeliveryCost(-1, "+")).toEqual("Число не должно меньше или равно 0")
       expect(calculateDeliveryCost()).toEqual("Введите данные")
    })
})

