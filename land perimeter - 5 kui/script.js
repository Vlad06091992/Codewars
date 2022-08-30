function landPerimeter(arr) {
    let res = 0
    let newArr = arr.map(el => Array.from(el))

    for (let i = 0; i < newArr.length; i++) {
        // console.log(newArr[i])
        let upArray = newArr[i - 1]
        let array = newArr[i]
        let downArray = newArr[i + 1]

        for (let j = 0; j < array.length; j++) {
            if (array[j] == 'X') {
                if (array[j] !== array[j - 1] || array[j - 1] == undefined) res += 1
                if (array[j] !== array[j + 1] || array[j + 1] == undefined) res += 1
                if (upArray && array[j] !== upArray[j]) res += 1
                if (downArray && array[j] !== downArray[j]) res += 1
            }
        }
    }
    let helpArr = Array.from(arr[0].concat(arr[arr.length - 1]))
    helpArr.forEach(el => {
        if (el == 'X') res++
    })
    return `Total land perimeter: ${res}`
}
console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]))
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]))