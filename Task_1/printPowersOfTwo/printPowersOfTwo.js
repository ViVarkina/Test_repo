//2

const  printPowersOfTwo=(n) =>{
    // console.log("start")
    let count = 0
    while (count < n) {
        let result = 2 ** count
        count = count + 1
        console.log(result)
    }
    // console.log("End")
}

printPowersOfTwo(3)
