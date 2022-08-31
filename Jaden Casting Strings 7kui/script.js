// String.prototype.toJadenCase = function () {
//     //...
//   };

function JCS(string){
let arr = string.split(" ")
let newStr
for(let i = 0; i < arr.length; i++){
arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
}
newStr = arr.join(" ")
return newStr
}

console.log(JCS("How can mirrors be real if our eyes aren't real"))

// let str = "asd"
// str = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(str)