const {users}=require("./data")
//indexOf lastIndexOf-- для поиска


const testArr = ["яблоко","Груша","Банан"]


// слево на право
const testIndexOf=(arr,searchElement) =>{
    const copyArr = arr.slice()

    return copyArr.indexOf(searchElement)
}

// console.log(testIndexOf(testArr, "Банан"))


// справо на лево
const lastIndexOff=(arr, searchElement) => {
    const copyArr =arr.slice()
    return copyArr.lastIndexOf(searchElement)
}

// console.log(lastIndexOff(testArr, "Банан"))

//includes поиск наличия элемента, возращает true или false

const testInclude=(arr, searchElement) =>{
    const copyArr =arr.slice()
    return copyArr.includes(searchElement)
}

// console.log(testInclude(testArr,"Банан"))


const  acceptableScores = ["4", "5"]
const getPassingGrade=(arrScores, score) =>{
    return arrScores.includes(score)
}

// console.log(getPassingGrade(acceptableScores, 3))

// fins findIndex
const testFind=(arr)=>{
    const callback=(elem)=>{
        return elem.firstName === "Elijah"
    }

     // return arr.find(callback))
     //    return elem.find((elem) => callback(elem))

}

// console.log(testFind(users))


const  customFind = (array, callback) => {
    for (const elem of array) {//будет получать каждый элемент из массива arr
        if (callback(elem)) {
            return elem
        }
    }
    return undefined
}
const  getFirstNameEmily = (elem) =>{
    // if (elem.firstName === "Emily"){
    //     return true
    // }
    // else {
    //     return false
    // }
    return  elem.lastName==="Bogisich"
}

//console.log(customFind(users, getFirstNameEmily))


const testFindIndex=(arr)=>{
    return arr.findIndex(el=>el.firstName === "Emily")
}

// console.log(testFindIndex(users))
// console.log(users[testFindIndex(users)])



//filter

const testFilter = (arr) =>{
    return arr.filter((elem)=>{
        return elem.Age<50
    })
}

// console.log(users.length)
// console.log(testFilter(users))
// console.log("testFilter",testFilter(users).length)
// console.log("////////////")
// console.log(users.length)


const getAllMale = (arr) =>{
    return arr.filter(el => el.gender === "male")//1

    return arr.filter((el) =>{//2
        return el.gender === "male"
    })

    return arr.filter(function (elem){
        if (elem.gender === "male"){
            return true
        }
        else {
            return false
        }
    })
}

// console.log(getAllMale(users))



//map
const testMap=(arr)=>{
    return arr.map(el=>{
        return {...el, gender: el.gender==="female"?"1":el.gender}
    })
}

// console.log(testMap(users))


const testMap2=(arr)=>{
    return arr.map(el=>{
        return {...el, estimations: el.Age > 50 ? ["1","2","3","4","5"]: [1,2,3]}
    })
}

// console.log(testMap2(users))

const getAllName=(arr) =>{
    return arr.map(el=>el.firstName)
}


// console.log(getAllName(users))
// console.log(getAllName(users).indexOf("Lucy"))


//sort изменяет массив

const sortByAge =(arr)=>{
    const copyArr = arr.slice()

    return copyArr.sort((a,b)=>{
        console.log(a.Age - b.Age, a.Age, b.Age)
        return a.Age - b.Age
    })
}
console.log(sortByAge(users))



