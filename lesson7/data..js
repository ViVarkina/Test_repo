const {users,arrUser}=require("../data")
const {convertScoreToGrade} = require("../Task/convertScoreToGrade/convertScoreToGrade");

const getLengthArrayCustom = (arr) => {
    let totalCount = 0
    for (const arrElement of arr) {
        totalCount = totalCount + 1
    }
    return totalCount
}

// console.log(getLengthArrayCustom(users))


const getLengthArrayCustom2 = (arr) =>{
    const arrCopy =[...arr]
    const reversArray = arrCopy.reverse()
    const firstElementInReverseArray = reversArray[0]
    const index = arr.indexOf(firstElementInReverseArray)
    return index + 1
}

// console.log(getLengthArrayCustom2(users))

//splice arr.splice(index,deleteCount, elem1, ... elem2)

const testSplice =(arr) =>{
    const arrCopy = [...arr]
    // delete arrCopy[1] удаляет элемент но не удаляет ячейки
    console.log("delete", arrCopy.splice(5,5, "1", "2", "3"))

    console.log(arr.length)
    console.log(arrCopy.length)


    return arrCopy
}
// console.log(testSplice(users))




const deleteArrComponents =(arr) => {
    const arrCopy = [...arr]
    const newUser={
            "createdAt": "2024-02-10T09:13:53.225Z",
            "firstName": "Kai",
            "lastName": "Strimon",
            "gender": "men",
            "city": "Miami Gardens",
            "numberPhone": "843.851.5711 x609",
            "Age": 90,
            "id": "123"
        }
    arrCopy.splice(5, 7, newUser)
    arrCopy.splice(3,0,"122")
    console.log(arr.length)
    console.log(arrCopy.length)
    return arrCopy
}

// console.log(deleteArrComponents(users))

//slice arr.slice(start, end)

const testSlice =(arr)=>{
    const newArr=arr.slice(-2)
    console.log(newArr.length)
    return newArr
}

// console.log(testSlice(users))


// concat соз новый массив и коп данные из других массивов

const testConcat =()=>{
    const arr1=[1,2,3]
    const arr2 =[4,5,6]
    let newArr=[]
    newArr = newArr.concat(arr1, arr2)
    return newArr
}

const testSpred =()=>{
    const arr1=[1,2,3]
    const arr2 =[4,5,6]
    let result=[...arr2, ...arr1]
    return result
}

console.log(testConcat())
console.log(testSpred())


// Метод forEach перебор элементов (вознащает undef.. тип нечего)
//arr.forEach(function(item,index,array){...что-то делаем}

const testForEach=(arr) =>{
    const copyArr = arr.slice()

    let male = 0
    let female = 0
    let misterXYZ = 0
    let totalSumAge = 0
    copyArr.forEach((user, index) =>{
        totalSumAge = totalSumAge + user.Age
        user.city = "Чита"
        // user.gender = "Супер Функциональный Шкаф Сделанный Из Кирпича Размером 1000 на 1000 метров"
        // if (user.Age > 55){
        //     user.isPensoParty = true
        // }
        // else {
        //     user.isPensoParty = false
        // }
        if (user.gender === "male"){
            male += 1
        }
        else if (user.gender === "female"){
            female += 1
        }
        else {
            misterXYZ += 1
        }
    })
    console.log("Ж:", female)
    console.log("М:", male)
    console.log("МистерХYZ:", misterXYZ)
    // console.log(copyArr)
    // console.log(totalSumAge)
    // const averageAge = totalSumAge / arr.length
    // console.log(averageAge)
}


testForEach(users)











module.exports={getLengthArrayCustom}