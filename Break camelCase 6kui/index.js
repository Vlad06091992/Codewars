function solution(string) {
    let lowercase = string.toLowerCase().split('')
    let arr = string.split('')

    console.log(lowercase, arr)

    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == lowercase[i]) {
            res.push(arr[i])
        }
        else {
            res.push(` ${arr[i]}`)
        }
    }
    return res.join('')

}
    console.log(solution("identifier"))