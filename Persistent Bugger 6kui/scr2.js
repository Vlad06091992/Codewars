function persistence(num) {

    function sumNumbers(number) {
        let str = number.toString()
        let arr = Array.from(str)
        let res = arr.reduce(function (sum, elem) {
            return +sum * +elem;
        }, 1)
        return res
    }

    let i = 0;

    while (num > 9) {
        num = sumNumbers(num)
        i++;

    }
    return i
}



console.log(persistence(0))

// let num = 999

// console.log(num.toString().length !== 1)
// let num = 999
// let res = num.toString().split("").reduce((a,b)=>a*b);
// let res2 = sumNumbers(999)
// console.log(res,res2)






