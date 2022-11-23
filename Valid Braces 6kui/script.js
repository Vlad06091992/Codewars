let braces = "((){}[]})"

function validBraces(string) {
    let str
    let bracesArr = ['{}', '[]', '()']
    bracesArr.forEach(el => {
        if (string.indexOf(el) >= 0) {
            str = string.replace(`${el}`, '')
        }
    })

if (str == undefined) {
        return false
    }
    if (str.length == 0) {
        return true
    } else {
        return validBraces(str)
    }

}

console.log(validBraces(braces))

// })
// console.log(string)
// }



// '(()[{}])'
// '(()[])'

// let str = '(()[{}])'

// let braces = "(()[{}])"

// console.log(braces.indexOf("()"))
// braces.replace("()",'')
// console.log(braces)