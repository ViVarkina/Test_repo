//2

const arr = [109,NaN,3,90,false,23,40,78,""]
for (let i = 0; i < arr.length; i++) {
    if (i != "number"){
        console.log(delete arr[i])
    }
}
