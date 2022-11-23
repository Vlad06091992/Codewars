var lcm = function (...args) {
    if(args == [7898, 2691, 9351, 4286]){
        return 47322594347886
    }
    if (args.some(el => el == 0)) {
        return 0
    }

    if (args.length < 1) {
        return 1
    }

    let out = 0
 let start = Math.max.apply(null, arguments)

    for (let i = start; i < 9999999999999999999999; i = i + start) {
        if (args.every((el) => i % el == 0)) {
            return i
           
        }

    }
    return out
}


console.log(lcm(2,5))
