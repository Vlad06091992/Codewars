

function getDivisorsCnt(n){
    let res = 0
    for(i = 1; i <= n; i++){
if(!(!!(n%i))){
    res++
}
    }
    return res
}

console.log(getDivisorsCnt(50000))