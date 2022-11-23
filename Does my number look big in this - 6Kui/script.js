function narcissistic(value) {
    let str = value.toString()
    let summ = 0
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    for (let i = 0; i < arr.length; i++) {
        summ = summ + arr[i] ** arr.length
    }
    return (value == summ ? true : false)
}

console.log(narcissistic(371))


