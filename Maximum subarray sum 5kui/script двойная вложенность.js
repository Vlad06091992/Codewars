let arr = [-1, -15, 99, -4, 51, 156, -124, -199,303]

// function isOnlyNegativeNumbers(array) {
//     let res = true
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             res = false
//              } 
//     }
//     return (res)
// }



var maxSequence = function (arr) {
    function isOnlyNegativeNumbers(array) {
    let res = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            res = false
             } 
    }
    return (res)
}

    function arrSum(start, end, array) {
        if (end >= start) {
            let sum = 0
            for (let i = start; i <= end; i++) {
                sum = sum + array[i]
            }
            return sum
        }
    }

    let res = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {

            sum = arrSum(i, j, arr)
            if (sum !== undefined) {
                res.push(sum)
            }
        }
    }

    if (arr.length == 0) {
        return 0
    } else if (isOnlyNegativeNumbers(arr)) {
        return 0
    } else {
        return (Math.max(...res))
    }
}

console.log(maxSequence(arr))



