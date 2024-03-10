//6

function countdown(n){
    let count = 1
    for (let i = 1; i <= n; i++) {
        count *= i
    }
    console.log(`${n}!=`, count)
}

countdown(5)