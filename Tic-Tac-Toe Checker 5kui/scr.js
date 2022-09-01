let arr = [[1,1,2],[0,1,1],[2,2,1]]

function validLine(arr){
for(let i = 0; i < arr.length;i++){
    if(arr[i][0]  === arr[i][2] && arr[i][1] == arr[i][2]){
        return arr[i][0]
    }
}
}

function validColumn(arr){
    for(let i = 0; i < 3;i++){
        if(arr[0][i] == arr[1][i] == arr[2][i]){
            return arr[1][i]
        }
}
}

function validAngle(arr){
    if(arr[0][0] == arr[1][1] == arr[2][2]){
        return arr[0][0]
    } else if(arr[0][2] == arr[1][1] == arr[2][0]){
        return arr[0][2]
    }
    }





console.log(validLine(arr))
console.log(validColumn(arr))
console.log(validAngle(arr))


