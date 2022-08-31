var uniqueInOrder = function (iterable) {
    if (typeof iterable == 'string') {
        iterable = iterable.split('')
    }

    if (iterable[0] == undefined) {
        return []
    }

    let res = []
    res.push(iterable[0])
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== res[res.length - 1]) {
            res.push(iterable[i])
        }
    }

    return res

}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}



