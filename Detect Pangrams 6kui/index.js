function isPangram(string) {
    let newStr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let isPang;
    for (let i = 0; i < alphabet.length; i++) {
        if (newStr.indexOf(alphabet[i]) > 0) {
            isPang = true
        }
        if (newStr.indexOf(alphabet[i]) < 0) {
            return isPang = false
        }
    }
    return isPang
}

let string = "Pack my box with five dozen liquor jugs."

console.log(isPangram(string))