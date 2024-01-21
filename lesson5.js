// 21.01.24

//Логические операторы

// || или

// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true ||false) // true
// console.log(false || false) // false

function logIli() {
    const a= 2
    const b= 3
    const c= 4
    const usl1 = a > b
    const usl2 = a > c
    const usl3 = usl1 || usl2
    console.log("usl1", usl1 )
    console.log("usl2", usl2 )
    console.log("usl3", usl3 )
    if (usl3) {
        console.log("истина")
    }
}
// logIli()

// && и

// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(false && false) // true


function logIli() {
    const a= 2
    const b= 3
    const c= 4
    const usl1 = a < b
    const usl2 = b < c
    const usl3 = usl1 && usl2
    console.log("usl1", usl1 )
    console.log("usl2", usl2 )
    console.log("usl3", usl3 )
    if (usl3) {
        console.log("истина")
    }
}

// logIli()

// ! не !! переводит

function logNot() {
    const a= undefined
    console.log(Boolean(a))
    console.log(!!a)
    if (a) {
        console.log("Значения нет")
    }
}

logNot()

// ЗАдачи