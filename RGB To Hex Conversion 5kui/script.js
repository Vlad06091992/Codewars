function rgb(r, g, b) {

    let res = []
    console.log(arguments)
    for (let key in arguments) {
       
        let x = 0
        if (arguments[key] > 255) arguments[key] = 255
        if (arguments[key] <= 0) {
            console.log(arguments[key] <= 0)
            res.push('00')
        }
        else {
            if (arguments[key].toString(16).toUpperCase().length < 2){
                res.push('0')
            }
            res.push(arguments[key].toString(16).toUpperCase())
            console.log()

        }


    }
    return res.join('')
}





console.log(rgb(98, 13, 11))
// console.log(rgb(2,296,121))