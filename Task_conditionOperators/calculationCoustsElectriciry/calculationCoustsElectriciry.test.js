const {calculationCoustsElectriciry}=require ("./calculationCoustsElectriciry")

describe("calculationCoustsElectriciry", ()=>{
    test("calculationCoustsElectriciry positive", ()=>{
        expect(calculationCoustsElectriciry(50)).toEqual("Тариф А")
        expect(calculationCoustsElectriciry(284)).toEqual("Тариф Б")
        expect(calculationCoustsElectriciry(689)).toEqual("Тариф В")
        expect(calculationCoustsElectriciry(0)).toEqual("Тариф А")
    })
    test("calculationCoustsElectriciry negative", ()=>{
        expect(calculationCoustsElectriciry()).toEqual("Введите данные")
        expect(calculationCoustsElectriciry(-15)).toEqual("Число не может быть меньше 0")
        expect(calculationCoustsElectriciry("fddg")).toEqual("Неправильный тип переменной")
        expect(calculationCoustsElectriciry("")).toEqual("Введите данные")
    })
})