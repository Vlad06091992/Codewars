function deleteNth(arr, x) {
    let cache = {}
    return arr.filter((e) => {
        if (e in cache) {
            cache[e]++
        } else {
            cache[e] = 1
        }
        return cache[e] <= x
    console.log(cache)

    })
}



let arr = [1, 2, 3, 4, 5, 5, 5, 6, 5, 6, 7, 7, 7]

// console.log(deleteNth(arr, 1))

// let obj = {
//     '1': 10,
//     '2': 20,
//     '3': 30
// }

// if (3 in obj) {
//     console.log(obj[3])
// }

console.log(deleteNth(arr,2))