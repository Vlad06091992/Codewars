function digital_root(n) {
    let res = summNum(n)
    while (res > 9) {
        res = summNum(res)
    }
    function summNum(num) {
        let summ = 0
        let str = num.toString()
        let arr = []
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
        arr.forEach(el => summ += parseInt(el))
        return summ
    }
    return res
}

console.log(digital_root(223442))





















// function summNum(num){
//     let summ = 0
//     let str = num.toString()
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i])
//     }
//     arr.forEach(el => summ += parseInt(el))
// return summ
// }

// console.log(summNum(12423424))