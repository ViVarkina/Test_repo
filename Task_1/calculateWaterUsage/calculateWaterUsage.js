//18

const calculateWaterUsage =(dropsPerMinute, minutes)=>{
    let count = 0
    let minut = 0
    while (minutes > count){
        minut = minut + dropsPerMinute
        count += 1
    }
    console.log(minut, "капель в", `${minutes} минут`)
}

calculateWaterUsage(10, 5)
