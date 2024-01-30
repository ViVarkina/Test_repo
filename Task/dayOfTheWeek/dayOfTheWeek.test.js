const {dayOfTheWeek}=require("./dayOfTheWeek")

describe("dayOfTheWeek",()=>{
    test("dayOfTheWeek positive", ()=>{
        expect(dayOfTheWeek(1)).toEqual("Ну это уже не выходной :(")
        expect(dayOfTheWeek(6)).toEqual("Выходной")
        expect(dayOfTheWeek(7)).toEqual("Выходной")
    })
    test("dayOfTheWeek negative", ()=>{
        expect(dayOfTheWeek(-1)).toEqual("Введите число от 1 до 7")
        expect(dayOfTheWeek()).toEqual("Введите данные")
        expect(dayOfTheWeek(true)).toEqual("Неправильный тип переменной")
        expect(dayOfTheWeek(29)).toEqual("Введите число от 1 до 7")
    })
})