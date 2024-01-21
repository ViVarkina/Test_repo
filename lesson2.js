//tell lesson 4 js 14.01.24

//сравнения значений

console.log(2==2)
console.log(2===2)
console.log(2==3)

console.log(2===2) // проверяет и тип данных (Этот лучше и надежнее)
console.log(2=="2") // не проверяет тип данных


// как бы истина (псевдо)

console.log(false == "  ") // "" считаются как false, пустая строка тоже
console.log(false == 0)
console.log(false == -0)
console.log(false == false)

// ВСё остальное - это псевно истинные значения

console.log(false == "Hello")
console.log(false == 42)
console.log(false == [42])


console.log(2!=3)
console.log(2!==3)


//Неравенство < > >= <=

const a = 3
const b = 4
const c = "5"

console.log(a<b)
console.log(b>c)


//условный оператор

// if-если, else-, else if

function f1(a) {
    if(a) {
        console.log("истина")
    }
}

f1(true)
f1(false)
f1("1")
f1([])
f1(function a(){})


f1(false)
f1("")
f1(0)
f1(-0)
f1(NAN)
f1(2-2)
f1(undefined)



function f1(a) {
    if(a) {
        console.log("истина")
    }
    else {
        console.log("ложно")
    }
}



function f3(num1, num2, znak) {
    if (znak === "+") {
        return num1 + num2
    }
    if (znak === "-") {
        return num1 - num2
    }
    else{
        return "Неизвестный знак"
    } 
}

console.log(f3(2, 3, "+"))
console.log(f3(2, 3, "-"))
console.log(f3(2, 3, "*"))





function f4(num1, num2, znak) {
    if (znak === "+") {
        console.log(num1 + num2)
    }
    if (znak === "-") {
        console.log(num1 - num2)
    }
    else{
        console.log("Неизвестный знак") 
    } 
}


function f5(num1, num2, znak) {
    if (znak === "+") {
        console.log(num1 + num2)
    }
    else if (znak === "-") {
        console.log(num1 - num2)
    }
    else {
        console.log("что-то пошло не так")
    }
}

console.log("1 вызов")
f5(2, 3, "+")
console.log("2 вызов")
f5(12, 3, "-")
console.log("3вызов")
f5(2, 3, "*")




