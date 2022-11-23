/* p0 - текущее население
percent - процент прироста каждый год
aug - количество приезжих или уезжающих
P - население в будущем*/

function nbYear(p0, percent, aug, p) {
    let year = 0
    while(p > p0){
    let coef = 1 + (percent * 0.01)
    let popOneYear = (p0 * coef) + aug
    p0 = popOneYear
    year++
    // return popOneYear
   
}
return year


}

console.log(nbYear(1500000, 2.5, 10000, 2000000))