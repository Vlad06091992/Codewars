function sumStrings(a,b) { 
    let num1;
    let num2;
 
     if(a === "" || a === " "){
         num1 = 0; 
         num2 = BigInt(b);
     } else if(b === "" || b === " "){
         num2 = 0;
         num1 = BigInt(a);
     } else {
         num1 = BigInt(a);
         num2 = BigInt(b);
     }
 
 
 let summ = num1 + num2
 let str = String(summ)
 
 return str
 } 
 

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))

