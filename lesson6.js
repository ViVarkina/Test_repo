//28.01

const looWhile=() =>{
    let i = 0
    while (i <= 10){
        console.log("Привет")
        i = i+1
    }
}

const loopWhile2=(value, stopWhile) => {
    let i = 0
    while (true) {
        i = i+1
        if(i === value) {
            continue
        }
        if (i === stopWhile){
            break
        }
        console.log(i)
    }
}

// НЕ выполниться while
function  loopWhile3() {
    console.log("start loopWhile3")
    while (false){
        console.log("hello")
    }
    console.log("end loopWhile3")
}

//Один раз выполнит и пойдет проверять условие
function  loopDoWhile() {
    console.log(" start loopDoWhile")
    do {
        console.log("1 раз сработал")
    }
    while (false){
        console.log("end loopDoWhile")
    }
}

// loopWhile3()
// loopDoWhile()


function  loopDoWhile2(stopValue) {
    console.log(" start loopDoWhile2")
    let count = 0
    do {
        if (count === 1) {
            console.log("Первый раз сработал", count)
        }
        else {
            console.log("count", count)
        }
        count = count + 1
    }
    while (count < stopValue){
        console.log("end loopDoWhile2")
    }
}


const  loopSlider=(numberPictures) => {
    console.log("start")

    let count = 1
    let count2 = 0

    while (true) {
        console.log(`показываем слайдер ${count}`)
        count = count +1
        count2 = count2 + 1
        if (count === numberPictures + 1) {
            count = 1
            console.log("обнулили переменную")
        }
        if (count2===20){
            break
        }
    }
    console.log("end")
}

// loopSlider(5)

//for
// for (начало; условие; шаг) {
//     тело цикла
// }

function loopFor(){
    for(let i = 0; i<=3;i= i + 1){
        console.log("Hello", i)
    }
}

function loopFor2(value) {
    console.log("start")
    for (let i = 1;i<=value; i = i +1){
        console.log(i)
    }

    console.log("end")

}

// loopFor2(28)


function loopFor3(startValue, stopValue, step ) {
    console.log("start")
    for (let i = startValue;i<=stopValue; i = i + step){
        console.log(i)
    }
    console.log("end")
}

// loopFor3(5,35,5)


//о что мне нужно
function printEvenNumber(startNum, stopNum){
    console.log("start")
    for (let i = startNum; i < stopNum; i++) {
        if (i%2===0){
            console.log("Число четное", i)
        }
    }
    console.log("end")
}

// printEvenNumber(0, 10)


function getTotalSum(startValue,stopValue) {
    console.log("start")
    let sum = 0
    for (let i = startValue; i <= stopValue; i++) {
        console.log(`oldsum=${sum}, i=${i}, newSum = oldSum+i${sum} + ${i}, ${sum + i}`)
        sum = sum + i
    }
//     console.log("end")
// }
//
// getTotalSum(1, 20)


    const isPrice = (value) => {
        if (value === 0) {
            return false
        }
        let count = 0
        for (let i = 0; i < value; i++) {
            if (i === 1 || i === value) {
                continue
            }
            if (value % i === 0) {
                count = count + 1
            }
            // console.log(value / i)
            // console.log(value % i)
        }
        console.log(count, value)
        if (count === 0) {
            return true
        } else {
            return false
        }
    }
}
