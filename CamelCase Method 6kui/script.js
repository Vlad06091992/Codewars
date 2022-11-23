
let string = "           testCase "



String.prototype.camelCase=function(){
 let newString = this.toString()

 if(newString.length == 0 ){
   return ''
 } else {
    let res = []
    
    for(let i = 0; i < newString.length;i++){
    
        if(newString[i] == ' '){
            res.push(newString[i+1].toUpperCase())
           newString = newString.replace(newString[i+1] ,'') 
        } else {
            res.push(newString[i])
    
        }
    
    
    }
    
   let f = res.join('')

  


if (f[0] = undefined) return ''

    return f[0]?.toUpperCase() + f.slice(1)
    
 }

    }

 console.log(''.camelCase())

