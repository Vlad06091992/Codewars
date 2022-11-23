let arr = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"]
newArr = []

for(let i = 0; i < arr.length; i++){
newArr.push(arr[i]+arr[i+1])
}

console.log(newArr)