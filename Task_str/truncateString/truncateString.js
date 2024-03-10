//5


const truncateString=(str, length)=>{
    let strStop = ""
    for (let i = 0; i < length ; i++) {
        strStop += str[i]
    }
    console.log(strStop)
}
truncateString("Привет", 2)