const {transportSchedule}=require("./transportSchedule")

describe("transportSchedule", () => {
    test("transportSchedule positive", ()=>{
        expect(transportSchedule(14,25)).toEqual("Осталось 5 минут, 0 часов")
        expect(transportSchedule(12,55)).toEqual("Осталось 5 минут, 0 часов")
        expect(transportSchedule(6, 23)).toEqual("Осталось 7 минут, 0 часов")
        expect(transportSchedule(4, 23)).toEqual("Первый автобус в 5 утра")
        expect(transportSchedule(96, 23)).toEqual("Число не должно быть больше 24 и меньше 0")
        expect(transportSchedule(6, 95)).toEqual("Число не должно быть больше 60 и меньше 0")
    })
    test("transportSchedule negative", ()=>{
        expect(transportSchedule("ffg", 5)).toEqual("Неправильный тип переменной")
        expect(transportSchedule()).toEqual("Введите данные")
        expect(transportSchedule(5,)).toEqual("Введите данные")
    })
});