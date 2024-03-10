//8

let arrayOfStrings = ["я","летучий","самолет"]
const concatenateStrings=(arrayOfStrings)=>{
    let strArr = ""
    for (let i = 0; i <= arrayOfStrings.length - 1; i++) {
        strArr += arrayOfStrings[i];
    }
    console.log(strArr)
}
concatenateStrings(arrayOfStrings)

// без пробелов