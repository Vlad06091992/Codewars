function ascendDescend(length, minimum, maximum) {
    
    let res = ''
    current = minimum
    console.log(res.length)
    
    if(length == 0 || minimum > maximum ){
        return ''
    } if(minimum == maximum){
        for(let i = 0; i < length; i++){
            res+=minimum
        }
    }
  
    
for(let i = 0; i < length;i++)

       {
        
        while (current < maximum) {
            console.log(current)
            res += current
            current++
          
        } 
       
      
        while (current > minimum) {
            console.log(current)
            res += current
            current--
       
        } 

   
       }

    return res.slice(0,length)
}




console.log(ascendDescend(86, -31, 22))

    // (11, 5, 9, "56789876567"  )
    //            "5678987656789876"