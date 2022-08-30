// function moveZeros(arr) {
//     let count = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0 || arr[i] === '0') {
//             count.push(arr[i])
//         }
//     }

//     let res = arr.filter(el => (el !== 0 ))
//     let res2 = res.filter(el => (el !== '0' ))

// count.forEach(el=>{
//     res2.push(el)
// })
// return res2
// }

let array = [ '5', null, '5', 6, {}, '8', '0' ]

console.log(moveZeros(array))

function moveZeros(arr) {
    let count = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count.push(arr[i])
        }
    }

    let res = arr.filter(el => (el !== 0 ))
    

count.forEach(el=>{
    res.push(el)
})
return res
}