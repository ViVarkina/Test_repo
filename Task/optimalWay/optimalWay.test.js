const {optimalWay}=require("./optimalWay")

describe("optimalWay", () => {
    test("optimalWay positive", ()=>{
        expect(optimalWay(78)).toEqual("Лучше на поезде")
        expect(optimalWay(29)).toEqual("Лучше на автобусе")
        expect(optimalWay(2390)).toEqual("Лучше на самолете")

    })
    test("optimalWay negative", ()=>{
        expect(optimalWay("mfbghjfb")).toEqual("Неправильный тип переменной")
        expect(optimalWay()).toEqual("Введите данные")
        expect(optimalWay(0)).toEqual("Ты не едешь")
    })
});