const {findMax}=require("./findMax")

describe("findMax", ()=>{
    test("findMax positive test", () => {
        expect(findMax(1,2)).toEqual("2 большее из чисел")
        expect(findMax(2,1)).toEqual("2 большее из чисел")
        expect(findMax(-10,100)).toEqual("100 большее из чисел")
        expect(findMax(1,1)).toEqual("Они равны")
    })
    test("findMax negative test", () =>{
        expect(findMax()).toEqual("Введите число")
        expect(findMax(1, "")).toEqual("Введите число")
        expect(findMax("nfjfd", "")).toEqual("Введите число")
        expect(findMax("nfjfd", "fgfg")).toEqual("Неправильный тип переменной")
        expect(findMax(true, false)).toEqual("Введите число")
    })
})