const {getLengthArrayCustom}=require("./data.")
const {users}=require("./data")

describe("getLengthArrayCustom", () => {
    test("getLengthArrayCustom must be equal 15", ()=>{
        expect(getLengthArrayCustom(users)).toEqual(15)
    })
});