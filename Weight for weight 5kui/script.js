function orderWeight(strng) {
    let arr = strng.trim().split(' ')
    function summary(x) {
        return x.split('').reduce((acc, el) => parseInt(acc) + parseInt(el), 0)
    }

    arr.sort(function (a, b) {
        let sumA = summary(a)
        let sumB = summary(b)

        return sumA == sumB ? a.localeCompare(b) : summary(a) - summary(b)
    })
  
  

    let out = arr.join(' ')
    return out
}
console.log(orderWeight("103 123 4444 99 2000"))  //"2000 103 123 4444 99"
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))