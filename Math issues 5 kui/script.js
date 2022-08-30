Math.round = function (number) {  //классическое округление
    let splitting = number.toString().split('.')
    let whole = Number(splitting[0])
    let fractional = splitting[1]
    if (fractional == undefined) {
        fractional == undefined
    }
    else if (fractional[0] == 0) {
        fractional = Number((1 + '.' + fractional) - 1)
    } else {
        fractional = Number('0.' + splitting[1])
    }

    if (fractional == undefined || fractional < 0.5) return whole
    if (fractional >= 0.5) return whole + 1

};

Math.ceil = function (number) { //округление к большему целому 
    let splitting = number.toString().split('.')
    let whole = Number(splitting[0])
    let fractional = splitting[1]
    if (fractional == undefined) {
        fractional == undefined
    }
    else if (fractional[0] == 0) {
        fractional = Number((1 + '.' + fractional) - 1)
    } else {
        fractional = Number('0.' + splitting[1])
    }

    return (fractional !== undefined) ? whole + 1 : whole

};

Math.floor = function (number) { //округление к меньшему целому 
    let splitting = number.toString().split('.')
    let whole = Number(splitting[0])
    return whole
};

console.log(Math.round(0.51))
console.log(Math.ceil(2.2))
console.log(Math.floor(2.2))

