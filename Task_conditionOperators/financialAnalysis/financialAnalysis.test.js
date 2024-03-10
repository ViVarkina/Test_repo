const {financialAnalysis}=require("./financialAnalysis")

describe('financialAnalysis', () => {
    test("financialAnalysis positive", ()=>{
        expect(financialAnalysis(4000, 2000)).toEqual(`Транцакция проведина успешно. Ваш текущий баланч = 2000`)
        expect(financialAnalysis(2591,360)).toEqual(`Транцакция проведина успешно. Ваш текущий баланч = 2231`)
        expect(financialAnalysis(520, 0)).toEqual(`Транцакция проведина успешно. Ваш текущий баланч = 520`)
        expect(financialAnalysis(520, 5620)).toEqual("Недостаточно денег для покупки")
    })
    test("financialAnalysis negative", ()=>{
        expect(financialAnalysis()).toEqual("Введите данные")
        expect(financialAnalysis(-30, 98)).toEqual("Число не может быть меньше 0")
        expect(financialAnalysis(95, -30)).toEqual("Число не может быть меньше 0")
        expect(financialAnalysis(95, "ffgg")).toEqual("Неправильный тип переменной")
        expect(financialAnalysis(95, "ffgg")).toEqual("Неправильный тип переменной")
    })
});