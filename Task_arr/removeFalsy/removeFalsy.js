//1

const arr = [109,3,90,23,40,78]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log("Самое большее число это", max)