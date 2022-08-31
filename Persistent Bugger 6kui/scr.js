function persistence(num) {
    let mult = sumNumbers(num)
   

    function iter(answer,iterations){
    
    while (answer > 9) {
        answer = sumNumbers(answer)
        iterations = iterations + 1
        return(iterations)
        
    }
}
    
    function sumNumbers(number) {
        let str = number.toString()
        let arr = Array.from(str)
        let res = arr.reduce(function (sum, elem) {
            return +sum * +elem;
        }, 1)
        
    }
    iter(mult,1)
    
    
}
console.log(persistence(999))

