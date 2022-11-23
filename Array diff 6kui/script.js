function arrayDiff(a, b) {
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
           console.log(a.length, b.length)
           console.log("массив А I =" +" " + i)    //console.log(arrayDiff([1,2,2],[2]))
        console.log("массив B J =" +" " + j)
      if(a[i] = b[j]){
          a.splice(i,1)
          j--
          console.log(a)
      }
           
        }

    }
    return (a)
}



// arrayDiff([1, 2, 2],[2])

console.log(arrayDiff([1,2,2],[2]))

// // let arr = [1,2,3]

// // arr.splice(1,1)

// // console.log(arr)