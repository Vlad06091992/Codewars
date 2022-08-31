function maxSum(arr, range) {
    let sumFrom0ToN = [0]

    for (let i = 0; i < arr.length; i++) {

        sumFrom0ToN[i] = (sumFrom0ToN[i - 1] || 0) + arr[i]
    }
    let summ = -Infinity
    // console.log(sumFrom0ToN)
    for (let i = 0; i < range.length; i++) {
        const [start, end] = range[i]
        // console.log(start, end)
        let currentSum = sumFrom0ToN[end] - (sumFrom0ToN[start-1])
        // console.log(currentSum)
        if (currentSum > summ) {
            summ = currentSum
        }
    }
    return summ

}


console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))


