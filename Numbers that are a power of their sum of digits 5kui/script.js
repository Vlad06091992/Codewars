function powerSumDigTerm(n) {
    res = []
    if(res.length > n){
    return res[n-1]
    } else {
        for(let i = 2; i < 30;i++){
            let summNumbers = i.toString().split('').reduce((sum,el)=>sum +parseInt(el),0) //сумма чисел которые итерируем
            for(let j = 2; j < 10;j++){
             if(summNumbers**j == i ){
                res.push(summNumbers**j)
             }
         
            }
         }
         return res
    }
   
}

console.log(powerSumDigTerm(20))




