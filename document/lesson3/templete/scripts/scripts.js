const createContainer=()=>{
    const newDiv = document.createElement("div")
    newDiv.classList.add("container")
    newDiv.id="formContainer"
    return newDiv
}

document.body.append(createContainer())

const  createInput = (id,placeholder, type="text")=>{
    const input = document.createElement("input")
    input.classList.add("input")
    input.placeholder=placeholder //для стартовой надписи
    input.type = type
    input.id = id
    return input

}

document.getElementById("formContainer").append(createInput("firstName","Введите имя"))
document.getElementById("formContainer").append(createInput("lastName","Введите фамилию"))
document.getElementById("formContainer").append(createInput("password","Введите пароль", "password"))

const createButton=()=>{
    const button = document.createElement("button")
    button.innerText="Вход"
    button.id="login"
    button.classList.add("btnLogin")
    return button
}

document.getElementById("formContainer").append(createButton())


//слушатель событий element.addEventListener(event,handler,[options])

const addEventListenerForButton=()=>{
    const btn =  document.getElementById("login")
    const  onClickHandler=(event)=>{
        console.log("Клик", event)
        const inputList = document.getElementsByTagName("input")
        const result = {}
        for (let i = 0; i < inputList.length; i++) {
            if(!inputList[i].value){
                console.log(inputList[i])
                alert(`Введите данные ${inputList[i].id}`)
                return
            }
            result[inputList[i].id] = inputList[i].value
        }
        console.log(result)
    }
    const  onMouseoverHandler=(event)=>{
        console.log(event.target)
        event.target.classList.add("btnLoginMouseOver")
        // console.log("На кнопке", event)
    }

    const onMouseoverLeave=(event)=>{
        event.target.classList.remove("btnLoginMouseOver")
        // console.log("Покинул кнопку")
    }
    btn.addEventListener("click", onClickHandler) //при клике
    btn.addEventListener("mouseover", onMouseoverHandler)//при наведении
    btn.addEventListener("mouseleave", onMouseoverLeave)//покинул
    //focus- попадание меняет цвет 
}
addEventListenerForButton()
