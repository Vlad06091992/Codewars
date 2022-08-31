function productFib(prod) {
    let array = []
    function getFibbonachiArray(num) {
        let fibbArr = [0, 1]
        for (let i = 2; i <= Infinity; i++) {
            let fibbonachi = fibbArr[i - 1] + fibbArr[i - 2]
            if (fibbonachi > num) {
                break
            } else {
                fibbArr.push(fibbonachi)
            }
        }
        return fibbArr
    }

    array = getFibbonachiArray(prod)
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] * array[i + 1] == prod) {
            return [array[i],array[i+1],true]
        }
        if (array[i] * array[i + 1] > prod) {
            return [array[i],array[i+1],false]
        }
        
    }
    
}

console.log(productFib(5895))




