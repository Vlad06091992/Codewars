
function rot13(message) {
    let arr = message.split('')
    console.log(arr)
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    ALPHABET = []
    alphabet.forEach(el => ALPHABET.push(el.toUpperCase()))
    console.log(ALPHABET)

    // console.log(alphabet.indexOf('a'))
    let res = []
    arr.forEach(el => {
        if (alphabet.indexOf(el) >= 0) {

            if ((alphabet.indexOf(el) + 13) < 26 && (alphabet.indexOf(el) + 13) >= 0) {
                res.push(alphabet[alphabet.indexOf(el) + 13])
            } else { res.push(alphabet[alphabet.indexOf(el) - 13]) }
        }

        else if (ALPHABET.indexOf(el) >= 0) {

            if ((ALPHABET.indexOf(el) + 13) < 26 && (ALPHABET.indexOf(el) + 13) >= 0) {
                res.push(ALPHABET[ALPHABET.indexOf(el) + 13])
            } else { res.push(ALPHABET[ALPHABET.indexOf(el) - 13]) }
        }
        else { res.push(el) }

    })

    return res.join('')

}



let str = 'tEST'

console.log(rot13(str))