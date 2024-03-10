const {bonusCalculation}=require("./bonusCalculation")

describe("bonusCalculation", ()=>{
    test("bonusCalculation positive", ()=>{
        expect(bonusCalculation(1)).toEqual("бонус составит 10% от зарплаты")
        expect(bonusCalculation(0)).toEqual("Нет бонуса")
        expect(bonusCalculation(2)).toEqual("бонус составит 10% от зарплаты")
        expect(bonusCalculation(4)).toEqual("бонус составит 20% от зарплаты")
        expect(bonusCalculation(7)).toEqual("бонус составит 25% от зарплаты")
    })
    test("bonusCalculation negative", ()=>{
        expect(bonusCalculation()).toEqual("Введите данные")
        expect(bonusCalculation(-18)).toEqual("Число не может быть меньше 0")
        expect(bonusCalculation("gkfkgf")).toEqual("Неправильный тип переменной")
    })
})