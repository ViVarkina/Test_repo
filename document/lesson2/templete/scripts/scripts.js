const getElementBuId=()=>{
    // console.log("getElement")
    console.log(document.getElementById("testLi"));
    console.log(document.getElementById("testLi223"));
    console.log(document.getElementById("outRangeElement")); //скрипт его не видит
    console.log(document.getElementById("testLi2"));


}

const getElementByQuerySelect=()=>{
    console.log(document.querySelector("#testLi"))
    console.log(document.querySelector("div"))

    console.log(document.querySelectorAll("li"))
}

const getElementsBy=()=>{
    console.log(document.getElementsByTagName("div"))
    console.log(document.getElementsByClassName("red"))
    console.log(document.getElementsByName("pop"))

}

getElementsBy()

//24.03.24
const getColorValue=()=>{
    const minValue = 0
    const maxValue = 255
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}
const getRGBColor =()=>{
    const colorR = getColorValue()
    const colorG = getColorValue()
    const colorB = getColorValue()
    return `rgb(${colorR},${colorG},${colorB})`
}
const createSquare=(content)=>{
    const newDiv = document.createElement("div") //создаем элемент
    newDiv.innerText = content //В этот див мы пишем content
    newDiv.classList.add("square") //добавления класса без удаления других классов
    newDiv.classList.add("square1")
    newDiv.id = content // создаем всем id
    newDiv.style.background= getRGBColor()
    return newDiv //выносим
}

const  addSquare=(square)=>{
    document.body.append(square)//добвляет элемент на страницу
}
for (let i = 1; i < 6; i++) { //сколько раз он добавляет элемент
    console.log(i)
    addSquare(createSquare(i))// добавляет написанный контент
}

const removeElement = ()=>{
    const removeElement = document.getElementById("2") //поиск по id
    removeElement.remove() //удалили объект
    console.log(removeElement)
}
removeElement()


const cloneElement=()=>{
    const elem =document.getElementById("1")
    const clone = elem.cloneNode(true) // клонирование, true- полное копирование вместе с содежимым false- без содержимого
    document.body.append(clone)// вставляем копию
}
cloneElement()