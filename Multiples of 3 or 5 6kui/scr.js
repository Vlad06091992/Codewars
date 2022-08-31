function solution(number){
    let acc = 0
    let arrayNumbers = []
    for(let i = 0; i < number;i++){
arrayNumbers.push(i)
    }

   let newArray = arrayNumbers.filter(el => {return((el % 3 == 0) ||(el % 5 == 0))})

   newArray.forEach(el => acc = acc + el)
  return(acc)
}

console.log(solution(10))