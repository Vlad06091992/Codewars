function findUniq(arr) {
    if(arr[0] == arr[1]){
        for(let i = 2; i < arr.length;i++){
            if(arr[i] != arr[0]){
                return arr[i]
            }
        }
    } else {
        for(let i = 2; i < arr.length;i++){
            if(arr[i] !== arr[0])  return arr[0]
            if(arr[i] !== arr[1])  return arr[1]
               
            
    }
   
  }
}
  console.log(findUniq([ 3, 3, 10 ]))