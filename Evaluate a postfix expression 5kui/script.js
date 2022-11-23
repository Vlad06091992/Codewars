// function postfixEvaluator(string) {
//     let array = string.split(' ')

//     let res = 0

//     function getNewArray(array) {
//         for (let i = 0; i < array.length; i++) {
//             switch (array[i]) {
//                 case '+':
//                     res = parseInt(array[i - 2]) + parseInt(array[i - 1])
//                     array.splice(i - 2, 3, res)
//                     break
//                 case '-':
//                     res = array[i - 2] - array[i - 1]
//                     array.splice(i - 2, 3, res)
//                     break
//                 case '/':
//                     res = array[i - 2] / array[i - 1]
//                     array.splice(i - 2, 3, res)
//                     break
//                 case '*':
//                     res = array[i - 2] * array[i - 1]
//                     array.splice(i - 2, 3, res)
//                     break
// default: res = array[i]
//             }
//         }
//     }
//     getNewArray(array)
//     console.log(array)


//         if(array.some(el=> el == '+' || el == '0' || el == '/' || el == '*')){
//             getNewArray(array)
//         }


//         console.log(array)


//     return res
// }


function postfixEvaluator(string) {
    let array = string.split(' ')
    let res = 0
    function getNewArray(array) {
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case '+':
                    res = parseInt(array[i - 2]) + parseInt(array[i - 1])
                    array.splice(i - 2, 3, res)
                    break
                case '-':
                    res = parseInt(array[i - 2]) - parseInt(array[i - 1])
                    array.splice(i - 2, 3, res)
                    break
                case '/':
                    res = Math.floor(parseInt(array[i - 2]) / parseInt(array[i - 1]))
                    array.splice(i - 2, 3, res)
                    break
                case '*':
                    res = parseInt(array[i - 2]) * parseInt(array[i - 1])
                    array.splice(i - 2, 3, res)
                    break
                default: res = array[i]
            }
        }
    }
    getNewArray(array)
    console.log(array)

    if (array.some(el => el == '*' || el == '0' || el == '/' || el == '+')) {
        getNewArray(array)
    }
    if (array.some(el => el == '*' || el == '0' || el == '/' || el == '+')) {
        getNewArray(array)
    }
    return res
}

console.log(postfixEvaluator("2 3 9 4 / + *"))
// console.log(postfixEvaluator("2 3 2 + *"))

// [ 12, 1, '*', 1, 4, '*', '/' ]