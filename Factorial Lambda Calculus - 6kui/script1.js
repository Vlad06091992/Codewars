let ZERO = 0
let ONE = 1
let TWO = 2
let THREE = 3
let FOUR = 4
let FIVE = 5

const FUCTORIAL = function (n){
    let n;
   
    let arr = []
    let res = 1;
    for( let i = 1 ; i <=n; i++){
let el = i
arr.push(el)
    }


for( let i = 0; i < arr.length; i++){
    res = res * arr[i]
}
return res
}

console.log(FUCTORIAL(FIVE))