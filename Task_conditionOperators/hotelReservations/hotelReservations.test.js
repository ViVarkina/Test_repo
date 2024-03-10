const {hotelReservations}=require("./hotelReservations")

describe('hotelReservations', () => {
    test("hotelReservations positive",()=>{
        expect(hotelReservations("Зима",3)).toEqual(3000)
        expect(hotelReservations("Лето",3)).toEqual(10500)
        expect(hotelReservations("Осень",3)).toEqual(4500)
        expect(hotelReservations("Весна",3)).toEqual(7500)
    })
    test("hotelReservations negative",()=>{
        expect(hotelReservations()).toEqual("Введите данные")
        expect(hotelReservations(3,4)).toEqual("Неправильный тип переменной")
        expect(hotelReservations(4, "ffg")).toEqual("Неправильный тип переменной")
        expect(hotelReservations("Лето", -5)).toEqual("Число не должно быть меньше 0")
        expect(hotelReservations("Летаао", 5)).toEqual("Введите сезон")
    })
});