const {seasonDiscount}=require("./seasonDiscount")

describe("seasonDiscount", ()=>{
    test("seasonDiscount positive", ()=>{
        expect(seasonDiscount(10)).toEqual("Скидка 15%")
        expect(seasonDiscount(3)).toEqual("Скидка 10%")
        expect(seasonDiscount(7)).toEqual("Нет скидки")
        expect(seasonDiscount(1)).toEqual("Скидка 20%")
    })
    test("seasonDiscount negative test", () =>{
        expect(seasonDiscount(0)).toEqual("Введи цифру от 1-12")
        expect(seasonDiscount(13)).toEqual("Введи цифру от 1-12")
        expect(seasonDiscount("gghh")).toEqual("Неправильный тип переменной")
        expect(seasonDiscount()).toEqual("Введите данные")
    })
})