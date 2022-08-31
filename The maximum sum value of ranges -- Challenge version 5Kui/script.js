// function maxSum(arr, range) {
//     // range.forEach(el => {
//     //     el[1] += 1
//     // });
//     let res = range.map(el => arr.slice(el[0], el[1] + 1).reduce((sum, el) => sum + el))
//     return Math.max.apply(null, res)
// }

// console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))

function maxSum(arr, range) {
    // range.forEach(el => {
    //     el[1] += 1
    // });
    // let res = range.map(el => arr.slice(el[0], el[1] + 1).reduce((sum, el) => sum + el))
    return Math.max.apply(null, range.map(el => arr.slice(el[0], el[1] + 1).reduce((sum, el) => sum + el)))
}

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))

