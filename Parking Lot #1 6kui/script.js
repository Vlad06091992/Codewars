class Bike {
    constructor(num) {
        this.num = num
    }
}
class Car {
    constructor(num) {
        this.num = num
    }
}
class Van {
    constructor(num) {
        this.num = num
    }
}


class ParkingLot {
    constructor(size) {
        this.size = size
        this.sizeArray = 0
    }

    park(vehicle) {
        if (Array.isArray(vehicle)) {
            this.sizeArray = vehicle.reduce((acc, v) => {
                if (v instanceof Bike) {
                    return acc += 1
                }
                if (v instanceof Car) {
                    return acc += 2
                }
                if (v instanceof Van) {
                    return acc += 3
                }
            }, 0)
            if (this.sizeArray > this.size) {
                return false
            } else {
                this.size -= this.sizeArray
                return true
            }
        } else {
            if (vehicle instanceof Bike) {
                this.size -= 1
                if(this.size > 0){
                    this.retrieve(vehicle.num)
                    return true

                } else {return false}
            }
            if (vehicle instanceof Car) {
                this.size -= 2
                if(this.size > 0){
                    this.retrieve(vehicle.num)
                    return true

                } else {return false}
            }
            if (vehicle instanceof Van) {
                this.size -= 3
                if(this.size > 0){
                    this.retrieve(vehicle.num)
                    return true

                } else {return false}
            }
        }
    }

    retrieve(num){
        console.log(num)
        let arr = []
        return arr.push(num)
        return arr
    }
}

let p = new ParkingLot(6)


let car = new Car('CD-456');
let car2 = new Car('CD-456');
let car3 = new Car('CD-456');
let bike = new Bike('AD-456');

let arr = [bike, bike,bike,bike,bike,bike,bike]


// console.log(p.park(arr))
console.log(p.park(car))
console.log(p.park(bike))
console.log(p.retrieve())

// else {
//     if(vehicle instanceof Bike){
//         this.size -= 1
//     }
//     if(vehicle instanceof Car){
//         this.size -= 2
//     }
//     if(vehicle instanceof Van){
//         this.size -= 3
//     }
//
//
//     if(this.size >= 0){
//         this.retrieve(vehicle.num)
//         return true
//     } else {
//         return false
//     }
// }


// if(vehicle instanceof Bike){
//     this.size -= 1
// }
// if(vehicle instanceof Car){
//     this.size -= 2
// }
// if(vehicle instanceof Van){
//     this.size -= 3
// }


// if(this.size >= 0){
//     this.retrieve(vehicle.num)
//     return true
// } else {
//     return false
// }