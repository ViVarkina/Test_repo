//4

const printEvenNumbers = (n) => {
    for (let i = 1; i <= n ; i++) {
        if (i%2===0){
            return i
        }
    }
}

module.exports={printEvenNumbers}