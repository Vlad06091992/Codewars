let arr = [1,0,5,1,4,100,12,13,15]

function deleteNth(arr,n){
    let newArr = []
    arr.forEach(el => {
        newArr.push(arr.indexOf(el))
        
    });
    return newArr
  }

console.log(deleteNth(arr))