function solution (roman) {
    let romNum = Array.from(roman)

    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let total = 0;
    let currentValue;
    let nextValue;
    for(let i = 0; i < romNum.length; i++){
       currentValue = numerals[romNum[i]]
        nextValue = numerals[romNum[i + 1]]
    if(nextValue > currentValue) {
        total = total - currentValue
       }
    else if(nextValue <= currentValue  || nextValue === undefined ) {
        total = total + currentValue
    } 
  }
    return(total)
}

console.log(solution('XXI'))



