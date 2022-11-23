// "use strict";

function flattenAndSort() {
    let res = []
    let newArray = []
    for(let el of arguments){
res = res + el.join(',') + ","
    }
    let promRes = res.split(',')
    promRes.sort(function(a,b){
        return a - b
    })
let array = promRes.filter(function(f) { return f !== '' })
array.forEach(element => {
   newArray.push(Number(element)) 
});

return newArray

}
    

// function flattenAndSort(array) {
//     return array && array
//       .reduce((a, b) => a.concat(b), [])
//       .sort((a, b) => a - b) || [];
// }

console.log(flattenAndSort([1,2,3],([[10,11,12],[13,14,15]])))