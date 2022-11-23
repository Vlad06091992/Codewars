let events = ["bad","hz"]


function well(x){
    let res = x.filter(el => el === "good")
    if(res.length == 2 || res.length == 1) {
        return ('Publish!')
    } else if (res.length > 2) {
        return( 'I smell a series!')
    } else {
        return("Fail")
    }
}

console.log(well(events))



