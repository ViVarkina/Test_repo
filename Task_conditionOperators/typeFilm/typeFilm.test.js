const {typeFilm}=require("./typeFilm")

describe("typeFilm", ()=>{
    test("typeFilm positive", ()=>{
        expect(typeFilm("G")).toEqual("Для всех возрастов")
        expect(typeFilm("R")).toEqual("Для лиц старше 17 лет")
        expect(typeFilm("GP-13")).toEqual("Для детей старше 13 лет")
    })
    test("typeFilm negative", ()=>{
        expect(typeFilm()).toEqual("Введите переменную")
        expect(typeFilm(0)).toEqual("Введите переменную")
        expect(typeFilm(12)).toEqual("Неправильный тип переменной")
        expect(typeFilm(true)).toEqual("Неправильный тип переменной")
        expect(typeFilm("OP")).toEqual("Такого рейтинга нет")
    })
})