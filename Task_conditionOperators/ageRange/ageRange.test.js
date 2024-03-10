const {ageRange}=require("./ageRange")

describe("ageRange", ()=>{
    test("ageRange positive", ()=>{
        expect(ageRange(1)).toEqual("Ребенок")
        expect(ageRange(13)).toEqual("Подросток")
        expect(ageRange(19)).toEqual("Взрослый")
        expect(ageRange(89)).toEqual("Пенсионер")
    })
    test("ageRange negative", ()=>{
        expect(ageRange()).toEqual("Введите данные")
        expect(ageRange(true)).toEqual("Неправильный тип переменной")
        expect(ageRange(0)).toEqual("Ты еще не родился")
        expect(ageRange(-1)).toEqual("Ты еще не родился")
    })
})