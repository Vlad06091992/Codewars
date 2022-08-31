function isPronic(n) {
let result = 0
let x = 0
let y = 1
while( result < n) {
  x = y;
  y = y + 1;
  result = x * y
  
}
if( result == n) {
  return true
} else {
  return false
}
}
console.log(isPronic(1560))