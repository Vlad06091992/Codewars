
var isPP = function (n) {
let res = [];
out = []
let string = `${n} isn\'t a perfect number`
outer:for(let i = 2; i <= n;i++){
    for(let j = 1; j <= n; j++){
        let num = j**i
        if(num > n) continue outer
       
        if(num == n){
            out.splice(0,0,j,i)
            return out
            } 
      
    }
}
// return res.sort((a,b) => a - b)
return string

}
console.log(isPP(5))