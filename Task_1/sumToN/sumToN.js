//1

const sumToN = (N) => {
    // console.log("start")
    if (!N && typeof N !== "number") {
        console.log("Введите данные")
    }
    else {
        let sum = 0
        for (let i = 1; i <= N; i++) {
            sum = sum + i
        }
        console.log(sum)}

    // console.log("End")
}

sumToN(10)
sumToN(3)
sumToN(0)
sumToN()
