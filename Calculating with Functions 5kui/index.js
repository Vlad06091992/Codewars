
function numBody(num, arg) {
    if (arg) {
    if (arg.action == "times") return num * arg.number
         if (arg.action == "dividedBy") return Math.floor(num / arg.number)
         if (arg.action == "plus") return num + arg.number
         if (arg.action == "minus") return num - arg.number
     } else { return num}
 
 }

function zero(arg) {
    let num = 0
    return numBody(num, arg)

}

function one(arg) {
    let num = 1
    return numBody(num, arg)
    }
 
 function two(arg) {
     let num = 2
    return numBody(num, arg)
    }

function three(arg) {
    let num = 3
    return numBody(num, arg)

}

function four(arg) {
    let num = 4
    return numBody(num, arg)
}

function five(arg) {
    let num = 5
    return numBody(num, arg)
}

function six(arg) {
    let num = 6
    return numBody(num, arg)
}

function seven(arg) {
    let num = 7
    return numBody(num, arg)
}

function eight(arg) {
    let num = 8
    return numBody(num, arg)
}

function nine(arg) {
    let num = 9
    return numBody(num, arg)
}

function minus(arg) {
    return { number: arg, action: 'minus' }
}


function times(arg) {
    return { number: arg, action: 'times' }
}

function dividedBy(arg) {
  return { number: arg, action: 'dividedBy' }
}

function plus(arg) {
     return { number: arg, action: 'plus' }
   }



console.log(two(times(five())))











