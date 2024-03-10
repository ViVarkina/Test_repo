//1

const reverseString=(str)=>{
    let strRev = ""
    for (let i =  str.length - 1;i >= 0; i--) {
        strRev += str[i];
    }
    console.log(strRev)
}


reverseString("Привет")