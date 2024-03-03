//Объекты


let user = new Object()
const user1 = {}

user1.name="Иван"

// console.log(user1)

const student ={
    name: "Ivan", //name - ключ , "Ivan" - Значение
    age: 19,
    isStudent: true,
    voice: function (a){
        return "Привет" + a
    }
    // "likes birds": true
}

// console.log(student.age)
// console.log(student.voice("&"))

// student.from={city: "London"}
// console.log(student)

delete student.age
// console.log(student)

// console.log(student["likes birds"])

const getValue = (key) =>{
    return student[key]
}
// console.log(getValue("voice")(""))


// [] постановка вычесляемого объекта
const setValue = (key, value)=>{
    const newStudent = {
        [key]: value
    }
    return newStudent
}

// console.log(setValue("name", "Ivan"))
// console.log(setValue("age", "7"))


const mapperUserArr = ()=>{
    const users=[
        {id:"user1", name: "Bob"},
        {id:"user2", name: "Bob1"},
        {id:"user3", name: "Bob2"},
    ]
    const result={
        user1: {id:"user1", name: "Bob"},
        user2:{id:"user2", name: "Bob2"},
        user3:{id:"user3", name: "Bob3"},
    }

    const mapperUser = {

    }
    users.forEach((user)=>{
        // console.log(user.id, user)
        mapperUser[user.id] = user
    })
    console.log(mapperUser)
    console.log(mapperUser.user2.name)
}
// mapperUserArr()


const createObj = (name, age)=>{
    return{
        name,
        age,
        city: "Moscow"
    }

}
// console.log(createObj("Ivan", 37))


// Проверка на наличия ключа- есть ли в student name
const isValue =()=>{
    console.log("name" in student)
    console.log("name1" in student)
}

const getAllValue = (obj)=>{
    console.log(obj)
    for (const key in obj) {
        console.log(key)
        console.log(obj[key])
    }
}
// getAllValue(student)





// копирование объектов

const copyObj=()=>{
    const user ={
        name: "Bob",
        age:12,
    }
    // const str = "Hello"
    // let newStr = str
    // newStr = "Bye"
    //
    // console.log(str)
    // console.log(newStr)

    const  newUser = {...user,from:{...user.from}}
    newUser.city = "Moscow"
    newUser.from.city = "NeMoscow"
    console.log(user)
    console.log(newUser)
}

// console.log(copyObj())

const copyObj2=()=>{
    const user ={
        name: "Bob",
        age:12,
        from: {
            city: "Rostov"
        }
    }
    // const newUser = {}
    // for (const userKey in user) {
    //     newUser[userKey] = user[userKey]
    // }
    // user.from.city = "Krasnodar"


    const newUser = {}
    Object.assign(newUser,user)
    user.from.city = "Taganrog"
    console.log(user)
    console.log(newUser)

}
// console.log(copyObj2())


//сравнение
const obj1 ={}
const obj2 =obj1
const obj3 ={}
// obj1 === obj2 true
//obj1 === obj3 false


// опциональная цепочка

const optionsChain = ()=>{
    const user ={
        name: "Bob",
        age:12,
        // student:{
        //     address:{
        //         street:{
        //             name: "bf"}}
        //     },
        from: {
            city:"Rostov"
        }
    }
    // console.log(user.student.address)
    if (user.student){
        if (user.student.address){
            if (user.student.address.street){
                console.log(user.student.address.street.name)
            }
        }
    }
    else{
        console.log("его нет")
    }
    // для безопастного вызова функции
    console.log(user.student?.address?.street.name)
}

optionsChain()
