function pillars(num_pill, dist, width) {
    let length;
    if(num_pill >= 1) {
      if(num_pill == 1) {
        length = 0
      } else if (num_pill == 2) {
        length = dist * 100
      } else if (num_pill > 2) {
       let distCM = dist * 100
  
  let = widthAllPill = (num_pill - 2) * width;
  
  let = widthDistAll = distCM * (num_pill -1)
  
  length = widthAllPill + widthDistAll
      }
      
    } else {
      console.log("enter correct data")
      
    }


return length

  }

  console.log(pillars(0, 10, 50))