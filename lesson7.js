// 04.02.24

//массивы
// Способы создания массивов

const array1= []
const array2 = new Array()

// console.log(array1, array2)

const fruits = ["apple", "lemon", "banana", "яблоко"]

// Доступ к элементам
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// Добавим элементы в массив

fruits[4]="orange"
// console.log(fruits, "после добавления")

// Узнать колличество элементов в массиве(по факту индекса + 1)

// console.log("Длима массива",fruits.length)

fruits[fruits.length]=`киви-${fruits.length}`

// fruits[123]="ahern-8"
// console.log(fruits)
// console.log(fruits[122])
// console.log(fruits.length)

const students = [
    {id:1, name:"Ivan", age:25, hello:()=>{
        return "hello1"
        }},
    {id:2, name:"Vi", age:34, hello:function (){
        return "hello2"
    }}
]

// console.log(students[0])
// console.log(students[0].name)
// console.log(students[0].hello())
// console.log(students[1].hello())

//Получение последнего элемента

// console.log("Последний элемент students:",students[students.length - 1]);
// console.log("Последний элемент fruits:",fruits[fruits.length - 1]);
//
// console.log(students.at(-1))
//
// fruits[3]="лук"
//
// console.log(fruits)

// pop/push

// console.log(fruits)
// console.log(fruits.push("зузи"));
// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits)

// console.log(fruits)
// console.log(fruits.unshift(""))
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)

//очередь push/pop
//стек push/shift

// fruits.push("лимон","лимон2")
// console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i]);
}

console.log("/////////")
for (const fruit of fruits) {
    console.log(fruits)
}
console.log(fruits)
fruits.length=3
console.log(fruits)