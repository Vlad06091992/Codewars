function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    let res = 0.5 * circleRadius*circleRadius * numberOfSides * Math.sin((Math.PI * 360/numberOfSides) / 180)
    return Math.round(parseFloat(res) * 1000) / 1000

}
console.log(areaOfPolygonInsideCircle(5.8,7))

// var rounded = function(number){
//     return ;
// }
//
// console.log(rounded(95.0258))