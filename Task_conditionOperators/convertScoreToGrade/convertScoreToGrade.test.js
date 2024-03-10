const {convertScoreToGrade}=require("./convertScoreToGrade")

describe("convertScoreToGrade tests", ()=> {
    test("convertScoreToGrade pozitive results", ()=> {
        expect(convertScoreToGrade(49)).toEqual("Оценка F - неудовлетворительно")
        expect(convertScoreToGrade(0)).toEqual("Оценка F - неудовлетворительно")
        expect(convertScoreToGrade(50)).toEqual("Оценка D - удовлетворительно")
        expect(convertScoreToGrade(54)).toEqual("Оценка D - удовлетворительно")
    })
    test("convertScoreToGrade negative results", ()=> {
        expect(convertScoreToGrade()).toEqual(("Введите данные"))
        expect(convertScoreToGrade("fngjnfjg")).toEqual(("Неправильный тип переменной"))
        expect(convertScoreToGrade("")).toEqual(("Введите данные"))
        expect(convertScoreToGrade(-1)).toEqual(("Оценка не может быть меньше 0"))
        expect(convertScoreToGrade(123)).toEqual(("Оценка не может быть больше 100"))
    })
})