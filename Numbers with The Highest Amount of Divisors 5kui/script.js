function procArrInt(listNum) {
    let length = listNum.length
    let primeNumbers = listNum.filter(x => {
        let res
        for (let i = 2; i < x; i++) {
            if (x % i == 0)
                res = false
        }
        if (res == false) {
            return false
        } else {
            return true
        }
    })

    let numberOfDivisors = listNum.map((num) => {
        let count = 0
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++
            }
        }
        return count
    })

    let max = Math.max.apply(null, numberOfDivisors)

    let indexes = []

    numberOfDivisors.forEach((el, i) => {
        if (el == max) {
            indexes.push(i)
        }
    })

    let out = indexes.map(el => listNum[el]).sort((a, b) => a - b)

    return [length, primeNumbers.length, [max, out]];
}

var list4 = [641, 976, 517, 263, 136, 270, 941,
    400, 915, 790, 539, 414, 816, 546, 675, 548, 299,
    812, 45, 432, 392, 178, 310, 439, 956, 319, 450,
    566, 72, 74, 715, 336, 723, 854, 472, 996, 604,
    861, 182, 609, 117, 484, 358, 1000, 363, 237,
    111, 629, 759, 505, 510];

console.log(procArrInt(list4))
