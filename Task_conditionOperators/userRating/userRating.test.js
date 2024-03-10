const {userRating}=require("./userRating")

describe("userRating", ()=>{
    test("userRating positive", ()=>{
        expect(userRating(1)).toEqual("новичек")
        expect(userRating(0)).toEqual("новичек")
        expect(userRating(24)).toEqual("активный пользователь")
        expect(userRating(56)).toEqual("ведущий специалист")
    })
    test("userRating negative", ()=>{
        expect(userRating()).toEqual("Введите данные")
        expect(userRating("")).toEqual("Введите данные")
        expect(userRating(-18)).toEqual("Число не может быть меньше 0")
        expect(userRating("gkfkgf")).toEqual("Неправильный тип переменной")
    })
})