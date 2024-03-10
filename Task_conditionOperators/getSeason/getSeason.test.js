const {getSeason}=require("./getSeason")

describe("getSeason", () => {
    test("getSeason positive test", () =>{
        expect(getSeason(1)).toEqual("Зима")
        expect(getSeason(10)).toEqual("Осень")
        expect(getSeason(3)).toEqual("Весна")
        expect(getSeason(7)).toEqual("Лето")
    })
    test("getSeason negative test", () =>{
        expect(getSeason(0)).toEqual("Введи цифру от 1-12")
        expect(getSeason(13)).toEqual("Введи цифру от 1-12")
        expect(getSeason("gghh")).toEqual("Неправильный тип переменной")
        expect(getSeason()).toEqual("Введите данные")
    })
})


