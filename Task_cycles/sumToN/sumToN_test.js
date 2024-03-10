const {sumToN}=require("./sumToN")

describe("sumToN", () => {
    test("sumToN positive", ()=>{
        expect(sumToN(10)).toEqual(55)
        expect(sumToN(0)).toEqual(0)
        expect(sumToN(3)).toEqual(6)
    })
    test("sumToN negative", ()=>{
        expect(sumToN()).toEqual("Введите данные")
    })
});