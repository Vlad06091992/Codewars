let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function rotate(matrix,direction) {
    //rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]

let res = []

function reverse(arr){
    if(isArray(arr)){
        return arr.reverse()
    }
}

    for (let j = 0; j < matrix[0].length; j++) {
        let temp = []
        for (let i = matrix.length - 1; i >= 0; i--) {
            temp.push(matrix[i][j])
}
        res.push(temp)
    }

    if(direction == "clockwise") return res
    if(direction = 'counter-clockwise'){
        return res.map(el => el.reverse()).reverse()

}
}



// console.log(rotate(matrix,"clockwise"))
// console.log(rotate(matrix,"counter-clockwise"))

let ar = [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ] // [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ]

function reverse(arr){
    let res = []
    if(Array.isArray(arr)){
       res = arr.map(el=>el.reverse())
    } else {reverse(res)}
    return res
}

console.log(reverse(ar))