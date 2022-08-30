let recipe = { flour: 500, sugar: 200, eggs: 1 };                      //рецепт
let available = { flour: 10, sugar: 1200, eggs: 6, milk: 200 };      //продукты в наличии

function cakes(recipe, available) {
    let m
    for (let key in recipe) {
        if (!(key in available)) return m = 0
    }

    if (m = 0) {
        return 0
    } else {
        let res = []
        for (let key in available) {
            let hm = Math.floor((available[key] / recipe[key]))
            if((!isNaN(hm))){
                res.push(hm)
               } 
        }

        return(Math.min.apply(null,res))
    }
}


console.log(cakes(recipe, available))