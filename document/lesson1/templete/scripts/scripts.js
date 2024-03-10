const getHello=()=>{
    return  "Hello!"
}

// alert(getHello())

console.log(document)
// window.myObj = "MyObj"
window.myObj = {name: "MyObj"}
console.log("window",window)
console.log("window.myObj",window.myObj)

const colorMapper = (color)=>{
    const colorObj={
        красный:"red",
        зеленый:"green",
        синий:"blue"
    }
    return colorObj[color]
}
const changeBackgroundBody=()=>{
    const getColor = prompt("В какой цвет покрасить?")

    document.body.style.background=colorMapper(getColor)

    setTimeout(function (){
        document.body.style.background=""
    }, 6000)
}
// changeBackgroundBody()


// BOM Browser Object Model

const getObj=()=>{
    console.log(navigator.userAgent)
    localStorage.setItem("userAgent", navigator.userAgent)
}

getObj()

const getObjStor=()=>{
    // localStorage.setItem("userAgent", navigator.userAgent)
    console.log(localStorage.getItem("userAgent"))
}

// getObjStor()

const getLocation=()=>{
    console.log(location.href)
    if(confirm("Перейти на сайт ...")){
        location.href = "https://wikipedia.org"
    }
}
getLocation()