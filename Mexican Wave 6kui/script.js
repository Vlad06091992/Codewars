function wave(str) {
    let res = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] == ' ') continue
        let arr = str.split('')
        arr.splice(i, 1, str[i].toUpperCase())
        res.push(arr.join(''))
    }
    return res
}

function wave(str){
    let waveArr = [];
    for(let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (letter === " ") {
        continue;
      } else {
        waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
      } 
    }
    return waveArr;
  }
  
console.log(wave("two words"))

