function padovan(n) {
    let res = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9]

if(n > 4) {
    for(let i = 10; i <= n ; i++){
    
    res.push((res[i-1] + res[i-5]))
    }
    return res[res.length - 1]
    }


else{
    return res[n]
}

}




console.log(padovan(2))