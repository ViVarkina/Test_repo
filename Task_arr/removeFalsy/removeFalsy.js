//1

const arr = [1,3,9,23,4,78]
let max = arr[0]
for (let i = 0; i < arr; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
    else {
        max = arr[i]
    }
}
console.log("Самое большее число это", max)