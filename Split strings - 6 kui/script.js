let string = "abcdefgfrgfgd"

function solution(str){
   let arr = Array.from(str)
   let newArr = []
   for(let i = 0; i < arr.length; i = i + 2)
   if(arr[i+1]){
    let el = arr[i] + arr[i+1]
    newArr.push(el)
     } else {
         let el = arr[i] + '_';
         newArr.push(el)
     }
    return newArr
   }
   
  
   


console.log(solution(string))

