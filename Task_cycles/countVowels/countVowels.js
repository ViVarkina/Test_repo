//19

const countVowels = (sentence) => {
    let count = 0
    for (let i = 0; i < sentence.length; i++) {
        if (i === 1){
            count = count + 1
        }
    }
    console.log(`В слове ${sentence} ${count} гласных букв`)
}

countVowels("Тест2")

//решение очень тупое