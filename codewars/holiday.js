function dutyFree(normPrice, discount, hol){

    let salePrice = ((100 - discount)/100) * normPrice;
    let spread = normPrice - salePrice
    let res = hol / spread
    let result = Math.floor(res)
    return(result)
  }

  console.log(dutyFree(12,50,1000))