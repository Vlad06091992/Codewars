function getSum(a, b) {
   let sum = 0
   if (a <= b) {
      for (let i = a; i <= b; i++) {
         sum = sum + i
      }
   } else {
      for (let i = b; i <= a; i++) {
         sum = sum + i
      }
   }
   return sum
}

console.log(getSum(0, -3))

function getSum(a, b) {
   let sum = 0;
   (a <= b) ? for (let i = a; i <= b; i++) {sum = sum + i};
   : for (let i = b; i <= a; i++) {sum = sum + i};
   return sum ;


         
}  
   
   

