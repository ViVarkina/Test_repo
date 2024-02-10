const {applyDiscount}=require("./applyDiscount")

describe("applyDiscount", ()=> {
    test("applyDiscount positive test", ()=> {
        expect(applyDiscount(1200, 50)).toEqual(600)
        expect(applyDiscount(2000, 25)).toEqual(1500)
    })
    test("applyDiscount negative test", ()=> {
        expect(applyDiscount(10, 90)).toEqual("Скидка не действуюет на товар меньше 1000 рублей")
        expect(applyDiscount(1200, 101)).toEqual("Скидка не может быть больше 100%")
        expect(applyDiscount(0, 25)).toEqual("Скидка не действуюет на товар меньше 1000 рублей")
        expect(applyDiscount("", 25)).toEqual("Введите данные")
        expect(applyDiscount("", "ngfjgbfjbg")).toEqual("Введите данные")
        expect(applyDiscount("dgdgdgs", "ngfjgbfjbg")).toEqual("Неправильный тип переменной, введите числовую переменную")

    })
})