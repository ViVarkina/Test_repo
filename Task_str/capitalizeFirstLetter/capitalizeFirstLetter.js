//6

const capitalizeFirstLetter=(str)=>{
    let strNew = ""
    for (let i =  1;i < str.length; i++) {
        strNew += str[i];
    }
    console.log(str[0].toUpperCase() +strNew)
}
capitalizeFirstLetter("строка")

//глупое решение