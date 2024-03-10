//2

const isPalindrome=(str)=>{
        let strRev = ""
        for (let i =  str.length - 1;i >= 0; i--) {
            strRev += str[i];
        }
        if (str === strRev){
            console.log("Это строка палиндром:", str ,"=", strRev)
        }
        else {
            console.log("Эта строка не палиндром:", str ,"!=", strRev)
        }
}

isPalindrome("казак")
isPalindrome("мадам")
isPalindrome("детокс")