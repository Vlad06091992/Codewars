function expandedForm(num) {
    let str = num.toString()
    let arr = []
    //    console.log(str)
    let j = 1
    for (let i = str.length - 1; i >= 0; i--) {
        if(str[i] > 0){
        arr.unshift(str[i] * j)
        }
        j *= 10
    }
    return(arr.join(' + '))
     arr
}

console.log(expandedForm(70304))

// function expandedForm(num) {
//     let str = num.toString()
//     let arr = []
//     //    console.log(str)
//     let j = 1
//     for (let i = str.length - 1; i >= 0; i--) {
//         if(arr[i] <= 0){
//             arr.unshift(0)
//             j *= 10
//         } else{
//             arr.unshift(str[i] * j)
//             j *= 10
//         }
       
//     }
//     return(arr.join(' + '))
//      arr
// }