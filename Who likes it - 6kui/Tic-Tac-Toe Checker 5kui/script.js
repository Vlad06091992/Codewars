function isSolved(e) {
    
    e.forEach(el => {
        
        for (let i = 0; i < el.length; i++) {
            let answer = [true, el[0]]
            if (el[i] !== el[0]) {
                answer[0] = false
            }
        }
        return answer
    });
}
  
  
    console.log(isSolved([[1,0,1],[1,1,1],[0,0,2]]))

// function isValidLine(array){
    
//     let answer = [true,arr[0]]
//    array.forEach(el => {
//     el.forEach(el => {
//         if(el !== arr[0]){
//             answer[0] = false
           
           
//         } 
//    })
   
       
//     })
//     return (answer)
// }

// console.log(isValidLine([[1,1,1],[4,0,2],[0,0,0]]))

// let arr = [[1,0,0],[1,2,2],[1,1,1]]