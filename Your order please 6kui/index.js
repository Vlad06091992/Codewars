function order(words) {
    let arr = words.split(' ')

    let index = arr.map(el => {
        let hz;
        let array = el.split('')

        array.forEach(el => {
            if (!isNaN(parseInt(el))) {
                hz = parseInt(el)
            }
        });

        return hz
    })

    let res = []

    for (let i = 0; i < arr.length; i++) {
        res[index[i] - 1] = arr[i]
    }

    return res.join(' ')

}



console.log(order("is2 Thi1s T4est 3a"))



