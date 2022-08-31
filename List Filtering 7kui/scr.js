
// let num = "5"

// console.log(Number(num))

   
    
  
    // function filter_list (value) {
    // let filter = value.filter(el => (!(isNaN(el))))
    // let arr = []
    // let number = filter.forEach(el => {
    //     arr.push(Number(el))
    // });   
    //             return(arr.filter((el,i)=>{return(arr.indexOf(el) === i)}))
    //  }

    //  console.log(filter_list(["a", "b", "1"]))

// let arr = [ 1, 2, 1, 123, 123 ]

// let res = arr.filter((element,index) =>{return(arr.indexOf(element) == index)})

// console.log(res)

function filter_list (value) {
    let filter = value.filter(el =>(typeof(el) == 'number'))
   
                return(filter)
     }

     console.log(filter_list([2,'b','1']))

   