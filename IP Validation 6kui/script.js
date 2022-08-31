function isValidIP(str) {
    let flag
    function answer(flag) {
        
if(str.includes("\n") || str.includes("e") || str.includes(" ")){
    return false

        } else if (flag !== false ) {
            return true
        }
         else {
            return false
        }
    }

    let arr = str.split('.')
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > 255 || arr[i] < 0)|| isNaN(arr[i]) || arr.length !== 4 || arr[i].indexOf(' ') > 0 || arr[i].indexOf('\n') > 0 || 
        arr[i].length > 3 || arr[i].length < 1 || (arr[i].length > 1 && arr[i].indexOf(0) == 0)) {
            flag = false;
            break;
        }
    }
    return answer(flag)
}


console.log(isValidIP(' 1.2.3.4'))



// console.log(typeof "\n1")
// function isValidIP(str) {
//     let flag;


//     let arr = str.split('.')
//     arr.forEach(element => {
//        if(element > 255 || isNaN(element) || arr.length !==4){
//        flag = false
//        break
//        }
//           });
//     return flag
//   }



//   let phrase = "fkslfl"

//   console.log(!isNaN(phrase))