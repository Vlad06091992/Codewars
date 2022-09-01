let array1 = [121, 144, 19, 161, 19, 144, 19, 11]
let array2 =  [121, 14641, 20736, 361, 25921, 361, 20736, 361]


    let a = array1;  
    let b = array2;
    let result = []
    let resultQuad = []
    let aQuad =[];
    let total;

    if(result.indexOf(true) < 0 ){
        total = false
    } else {total = true}
a.forEach(el => {
    let res = el**2
    aQuad.push(res)
})

b.forEach(el => {
    
    let res = a.includes(el)
    let resTwo = aQuad.includes(el)
    
    result.push(res)
    resultQuad.push(resTwo)
  
})

console.log(total)

