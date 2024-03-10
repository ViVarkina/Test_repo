const {discountAgeRange}=require("./discountAgeRange")

describe("discountAgeRange", ()=>{
    test("discountAgeRange positive", ()=> {
        expect(discountAgeRange(1)).toEqual("15%")
        expect(discountAgeRange(13)).toEqual("10%")
        expect(discountAgeRange(19)).toEqual("Без скидки")
        expect(discountAgeRange(89)).toEqual("20%")
    })
    test("discountAgeRange negative", ()=> {
        expect(discountAgeRange()).toEqual("Введите данные")
        expect(discountAgeRange(0)).toEqual("Ты еще не родился")
        expect(discountAgeRange("")).toEqual("Введите данные")
        expect(discountAgeRange("fdfsa")).toEqual("Неправильный тип переменной")
        expect(discountAgeRange(-2)).toEqual("Ты еще не родился")
    })
})