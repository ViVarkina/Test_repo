const {classifyTemperature}=require("./classifyTemperature")

describe("classifyTemperature", ()=>{
    test("classifyTemperature positive test",()=>{
        expect(classifyTemperature(9)).toEqual("Тепло")
        expect(classifyTemperature(5)).toEqual("Тепло")
        expect(classifyTemperature(-2)).toEqual("Холодно")
        expect(classifyTemperature(100)).toEqual("Жарко")
        expect(classifyTemperature(0)).toEqual("Тепло")
    })
    test("classifyTemperature negative test",()=>{
        expect(classifyTemperature("dfd")).toEqual("Неправильный тип переменной")
        expect(classifyTemperature(true)).toEqual("Неправильный тип переменной")
        expect(classifyTemperature()).toEqual("Введите данные")
    })
})