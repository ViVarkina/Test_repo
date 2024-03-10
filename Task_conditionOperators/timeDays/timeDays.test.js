const {timeDays}=require("./timeDays")

describe(" timeDays", ()=>{
    test(" timeDays positive", ()=>{
        expect(timeDays(3)).toEqual("ночь")
        expect(timeDays(9)).toEqual("утро")
        expect(timeDays(14)).toEqual("день")
        expect(timeDays(20)).toEqual("вечер")
    })
    test(" timeDays negative", ()=>{
        expect(timeDays()).toEqual("Введите данные")
        expect(timeDays(-1)).toEqual("Введи цифру от 0-23")
        expect(timeDays(25)).toEqual("Введи цифру от 0-23")
        expect(timeDays("")).toEqual("Введите данные")
        expect(timeDays("fdss")).toEqual("Неправильный тип переменной")
    })
})