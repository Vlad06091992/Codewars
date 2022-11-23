var capitals = function (word) {
let res = []
let capitals = word.match(/[A-Z]/g)
capitals.forEach( el => {
  res.push(word.indexOf(el))
})
return(res)
};

console.log(capitals("CodeWArs"))


