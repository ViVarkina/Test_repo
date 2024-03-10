//3

const countVowels=(str)=>{
    let count = 0
    for (let i = 0; i <= str.length-1; i++) {
        if (str[i] === "а" || "у" ||"ю" ||"о" ||"е" ||"ё" ||"ы" ||"и" ||"я" ||"э"){
            count += 1
        }
        else{
            count +=0
        }
    }
    console.log(`Гласных букв ${count}`)
}

countVowels("Мама")

//не решен