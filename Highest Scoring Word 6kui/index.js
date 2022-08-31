
function high(x) {

    let values = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    let phrase = x.split(' ')
    console.log(phrase)
    let word;
    let test = phrase.map(el => {
        let subArr = Array.from(el)
        return subArr.reduce((sum, elem) => {
            return sum += values[elem]
        }, 0)
    })
    let index = test.indexOf(Math.max.apply(null,test))
    return phrase[index]
}

console.log(high('my name is vlad'))
console.log(high('what time are we climbing up the volcano'))


// console.log('aaa' > 'b')

// let subArr =[ 'n', 'a', 'm', 'e' ]
// let res = subArr.reduce((sum,elem)=>{
//    return sum += values[elem]
// },0)

// console.log(res)
// console.log(values['f'])