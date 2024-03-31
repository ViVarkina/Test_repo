const getStar=(el, i)=>{
    // console.log(el, i)
    el.target.classList.add("yellow")
}
const  stars =document.getElementsByClassName("star")

const deleteClass=(event)=>{
    const classList = event.target.classList
    if(classList.contains("yellow")){
        classList.remove("yellow")
    }
}
const onClickHandler=(event, i)=>{
    // console.log(event.target, i)
    event.target.classList.add("choice")
    // console.log(`Оценка`, i+1)
    for (const star of stars) {
        star.removeEventListener("mouseover",getStar)
        star.removeEventListener("mouseleave", deleteClass)
        star.removeEventListener("click", onClickHandler)
    }
}
const getData=(event, i)=>{
    const getStars = document.querySelectorAll(".choice")
    if(!getStars.length){
        console.log(i+1)
    }
}

// const  stars =document.getElementsByClassName("star")

for (let i = 0; i < stars.length; i++){
    stars[i].addEventListener("mouseover",getStar)
    stars[i].addEventListener("mouseleave", deleteClass)
    stars[i].addEventListener("click", function (event){
        getData(event, i)
    })
    stars[i].addEventListener("click", onClickHandler)
}
