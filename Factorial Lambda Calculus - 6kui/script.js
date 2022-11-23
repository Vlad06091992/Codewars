const FUCTORIAL = function (str){
    let n;
    switch(str){


        case "ZERO":
        n = 0;
        break;
        case "ONE":
        n = 1;
        break;
        case "TWO":
        n = 2;
        break;
        case "THREE":
        n = 3;
        break;
        case "FOUR":
        n = 4;
        break;
        case "FIVE":
        n = 5;
        break;
        }
    
    let arr = []
    let res = 1;
    for( let i = 1 ; i <=n; i++){
let el = i
arr.push(el)
    }


for( let i = 0; i < arr.length; i++){
    res = res * arr[i]
}
return res
}

console.log(FUCTORIAL("FIVE"))