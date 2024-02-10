const {transportSchedule}=require("./transportSchedule")

describe("transportSchedule", () => {
    test("transportSchedule positive", ()=>{
        expect(transportSchedule(14,25)).toEqual("Осталось 5 минут, 0 часов")
        expect(transportSchedule(12,55)).toEqual("Осталось 5 минут, 0 часов")
        expect(transportSchedule(6, 23)).toEqual("Осталось 7 минут, 0 часов")
    })
    test("transportSchedule negative", ()=>{
        expect(transportSchedule("ffg", 5)).toEqual("Неправильный тип переменной")
        expect(transportSchedule()).toEqual()
        expect(transportSchedule()).toEqual()
    })
});