//10

function calculateInterest(initialAmount, interestRate, years){
    let count = 0
    let summ = 0
    for (let i = 0; i < years; i++) {
        let sum = initialAmount * interestRate / 100
        let fv = sum + initialAmount
        summ += fv
        count = fv
        initialAmount = count
    }
    console.log(count)
}

calculateInterest(100000, 6, 5)