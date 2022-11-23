(function* (){
    for (let i = 0; i < this.valueOf(); i++) {
        console.log(i)
      yield i ;
    }
  })()