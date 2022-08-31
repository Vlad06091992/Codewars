function printerError(s) {
   let arr = Array.from(s)
let length = arr.length
let errors =[]

arr.forEach( el => {
    if(el > 'm') {
        errors.push(el)
    }
})
let numErrors = errors.length

let result =`${numErrors}/${length}`
return(result)
}



console.log(printerError('jfjfkdgjdfhgdigdf'))