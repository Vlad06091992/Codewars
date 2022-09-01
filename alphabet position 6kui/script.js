function alphabetPosition(text) {
    let str = Array.from(text)
    let output = []
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    ALPHABET = []
    alphabet.forEach(el => ALPHABET.push(el.toUpperCase()))
    for(let i = 0;i < str.length; i++){
        if(ALPHABET.indexOf(str[i]) > -1 ){
            output.push(ALPHABET.indexOf(str[i]) +1)
           }
        
        if(alphabet.indexOf(str[i]) > -1 ){
        output.push(alphabet.indexOf(str[i]) +1)
       
       
    }
}
    return output.join(" ")
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

 