
function isNoNumber(num){
    return typeof num !== "number"
}
function getAverageNumber(num1, num2, num3) {
    if (!num1 || !num2 || !num3) {
        return "error"
    }
    // if (typeof num1 !== "number" || num2 !== "number" || num3 !== "number") {
    //     return "error"
    if (isNoNumber(num1) || isNoNumber(num2) || isNoNumber(num3)) {
    }
    //123
    if (num1 < num2 && num2 < num3) {
        return num2
    }
    //132
    if (num1 <num3 && num3 < num2) {
        return num3
    }
    //213
    if (num1 > num2 && num2 < num3 && num1 < num3) {
        return num1
    }
    //231
    if (num1 < num2 && num2 > num3) {
        return num1
    }
    //321
    if (num1 > num2 && num2 > num3) {
        return num2
    }
    //312
    if (num1 > num2 && num2 < num3 && num1 > num3) {
        return num3
    }
}


module.exports={getAverageNumber}