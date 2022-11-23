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
                    return true
                    this.retrieve(vehicle.num)
                } else {return false}
            }
            if (vehicle instanceof Car) {
                this.size -= 2
                if(this.size > 0){
                    return true
                    this.retrieve(vehicle.num)
                } else {return false}
            }
            if (vehicle instanceof Van) {
                this.size -= 3
                if(this.size > 0){
                    return true
                    this.retrieve(vehicle.num)
                } else {return false}
            }
        }
    }

    retrieve(num){
        let arr = []
        arr.push(num)
        return arr
    }
}

const { equal } = require('chai').assert;

describe("Basic Tests", function() {
    const p=new ParkingLot(6);
    describe("Bikes only", function() {
        const bikes=['B1','B2','B3','B4','B5','B6'];
        it("successfully park 6 bikes", function () {
            bikes.map(b=>equal(p.park(new Bike(b)),true));
        });
        it("attemp to park one more bike (full park)", function() {
            equal(p.park(new Bike('B7')),false);
        });
        it("attemp to retrieve bike which is not parked", function() {
            equal(p.retrieve('B7'),false);
        });
        it("retrieve all parked bikes", function() {
            bikes.map(b=>equal(p.retrieve(b),true));
        });
    });
    describe("Mixed vehicles", function() {
        it("successfully park mixed vehicles", function() {
            equal(p.park(new Bike('B1')),true);
            equal(p.park(new Car('C1')),true);
            equal(p.park(new Van('V1')),true);
        });
        it("attemp to park one more bike (full park)", function() {
            equal(p.park(new Bike('B2')),false);
        });
        it("retrieve car and park 2 bikes instead", function() {
            equal(p.retrieve('C1'),true);
            equal(p.park(new Bike('B2')),true);
            equal(p.park(new Bike('B3')),true);
            equal(p.park(new Bike('B4')),false);
        });
    });
});