const dynamicParams=()=>{
    const elem = document.createElement("div")
    elem.id = "whiteDiv"
    elem.style.width = "50px"
    elem.style.height = "50px"
    elem.style.background= "white"
    document.body.append(elem)
}

dynamicParams()

const whiteSquare = document.getElementById("whiteDiv")
const mouseMoveEvent=(event)=>{
    console.log(event.clientX, event.clientY)
    // console.log(whiteSquare);
    whiteSquare.innerText=`x = ${event.clientX}
    y = ${event.clientY}`

    whiteSquare.style.position="absolute"
    whiteSquare.style.top = `${event.clientY +10}px`
    whiteSquare.style.left = `${event.clientX +10}px`

}

const keyBoardHandler=(event)=>{
    console.log(event)
    whiteSquare.innerText=event.key
}

document.getElementById("testInput").addEventListener("keydown", keyBoardHandler)

const canselListener=()=>{
    document.body.removeEventListener("mousemove", mouseMoveEvent)
}

document.getElementById("testBtn").addEventListener("click", canselListener)



document.body.addEventListener("mousemove", mouseMoveEvent)