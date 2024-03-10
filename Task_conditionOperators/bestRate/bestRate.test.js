const {bestRate}=require ("./bestRate")

describe("bestRate", ()=>{
    test("bestRate positive", ()=>{
        expect(bestRate(2,6)).toEqual("Плохой тариф")
        expect(bestRate(250, 65)).toEqual("Нормальный тариф")
        expect(bestRate(690,250)).toEqual("Хороший тариф")
        expect(bestRate(1000, 674)).toEqual("Отличный тариф")
    })
    test("bestRate negative", ()=>{
        expect(bestRate()).toEqual("Введите данные")
        expect(bestRate(4,0)).toEqual("Минуты или сообщения не могут быть меньше 0")
        expect(bestRate(20,1000)).toEqual("Слишком большой разброс показателей")
        expect(bestRate("df", 78)).toEqual("Неправильный тип переменной")

    })
})