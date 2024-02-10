//9

function isPrime(n) {
    if (n === 0) {
        return false
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        if (i === 1 || i === n) {
            continue
        }
        if (n % i === 0) {
            count = count + 1
        }
    }
    console.log(count, n)
    if(count === 0){
        return true
    }
    else {
        return false
    }
}
isPrime(7)
isPrime(11)
isPrime(6)