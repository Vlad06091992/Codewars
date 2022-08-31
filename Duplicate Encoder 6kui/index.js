function duplicateEncode(word) {

    let helper = word.toLocaleLowerCase()

    function moreThanOneElement(elem, arr) {
        arrHelp = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                arrHelp.push(arr[i])
            }
        }
        return arrHelp.length > 1 ? true : false
    }

    let subArr = Array.from(helper)
    let res = subArr.map((el) => {
        return (moreThanOneElement(el, helper)) ? ')' : '('
    })
    
    
return res.join('')
}






console.log(duplicateEncode('Diin'))