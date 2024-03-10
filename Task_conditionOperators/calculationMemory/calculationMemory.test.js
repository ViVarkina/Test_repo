const {calculationMemory}=require("./calculationMemory")

describe("calculationMemory", ()=> {
    test('calculationMemory positive test', () =>{
        expect(calculationMemory(10, "Кб")).toEqual(10240)
        expect(calculationMemory(10, "kб")).toEqual(10240)
        expect(calculationMemory(10, "Mб")).toEqual(10485760)
    })
})