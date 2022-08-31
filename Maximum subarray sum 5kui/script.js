let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


var maxSequence = function (arr) {
    
    let res = []
    let acc = 0;
    var m = Math.max(...res);
    // console.log(m)

   
    for (let i = 0; i < arr.length; i++) {
        let start = i
        for (let k = arr.length - 1; k >= 0; k--) {
            // for(let k = 0; k < arr.length;k++){
            let finish = k
            for (let j = start; j <= finish; j++) {
                
                
                acc = acc + arr[j]
                res.push(acc)
            }
        }
    }
    return res
}

let result = maxSequence(arr)

console.log(maxSequence(arr))
console.log(Math.max(...result))




