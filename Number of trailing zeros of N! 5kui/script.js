function zeros(n) {
    if (n == 0) return 0
    // if (n == 100000) return 24900


    res = 0;
    for (let i = 1; i < n; i++) {
        let nules = Math.floor(n / (5 ** i))
        if (nules > 0) {
            res += nules
        } else {
            return res
        }
        
    }
    
}

console.log(zeros(6))
// function zeros(n) {
//    let res = Math.floor(n / 5)
//    let newRes = Math.floor(n / 25)
//    let newRes2 = Math.floor(n / 125)
//    let newRes3 = Math.floor(n / 625)

//    for(let i = 1)



//    let out = res + newRes + newRes2 + newRes3
//    return out 
// }

// console.log(zeros(1000))