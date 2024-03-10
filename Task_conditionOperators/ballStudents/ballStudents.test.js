const {ballStudents}=require("./ballStudents")

describe("ballStudents", ()=>{
    test("ballStudents positive", ()=>{
        expect(ballStudents(1)).toEqual("неудовлетворительно")
        expect(ballStudents(2.5)).toEqual("неудовлетворительно")
        expect(ballStudents(3.1)).toEqual("удовлетворительно")
        expect(ballStudents(4.6)).toEqual("хорошо")
        expect(ballStudents(3.8)).toEqual("хорошо")
    })
    test("ballStudents negative", ()=>{
        expect(ballStudents()).toEqual("Введите данные")
        expect(ballStudents(-18)).toEqual("Число не может быть меньше 0")
        expect(ballStudents("gkfkgf")).toEqual("Неправильный тип переменной")
    })
})